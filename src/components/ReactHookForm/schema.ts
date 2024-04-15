import { object, string, number, array } from 'yup';
import { Colors, ItemShape } from './types';

/**
 * 	Schema Logic
 * 	1. Required fields - reqdText & item.Name
 * 	2. Optional - quantity
 * 	3. Dependency - length, width & height. when one of these is filled,
 * 	   the other fields also need to be filled
 */

export const FormSchema = object().shape(
  {
    reqdText: string().required()
      .min(2),
    quantity: number()
      .nullable()
      .notRequired()
      .when('quantity', {
        is: value => value,
        then: rule => rule.min(10).max(100)
      }),
    color: string().oneOf(Object.values(Colors)),
    items: array().of(
      object().shape(
        {
          name: string().required(),
          description: string()
            .nullable()
            .when('description', {
              is: value => value?.length,
              then: rule => rule.min(3).max(10)
            }),
          shape: string().oneOf(Object.values(ItemShape)),
          length: number()
            .nullable()
            .notRequired()
            .when('length', {
              is: val => val,
              then: rule => rule.min(5).max(10000)
            })
            .when(['width', 'height'], {
              is: (a, b) => Boolean(a || b),
              then: number().required('required')
                .typeError('enter a number')
            }),
          width: number()
            .nullable()
            .notRequired()
            .when('width', {
              is: val => val,
              then: rule => rule.min(5).max(2000)
            })
            .when(['length', 'height'], {
              is: (a, b) => Boolean(a || b),
              then: number().required()
                .typeError('enter a number')
            }),
          height: number()
            .nullable()
            .notRequired()
            .when('width', {
              is: val => val,
              then: rule =>
                rule.min(5).max(100, 'Value can\'t be greater than 100')
            })
            .when(['width', 'length'], {
              is: (a, b) => Boolean(a || b),
              then: number().required()
                .typeError('enter a number')
            })
        },
        [
          ['length', 'width'],
          ['width', 'height'],
          ['length', 'height'],
          ['description', 'description'],
          ['length', 'length'],
          ['width', 'width'],
          ['height', 'height']
        ]
      )
    )
  },
  // Add Cyclic deps here because when require itself
  [['quantity', 'quantity']]
);
