import { object, string, number, array } from 'yup';
import { Colors, ItemShape } from './types';

export const FormSchema = object().shape(
	{
		reqdText: string().required().min(2),
		opText: string().min(5),
		color: string().oneOf(Colors),
		items: array().of(
			object().shape({
				name: string().required(),
				use: string().optional(),
				shape: string().oneOf(ItemShape),
				length: number()
					.notRequired()
					.min(5)
					.max(100)
					.when(['width', 'height'], {
						is: (a, b) => Boolean(a || b),
						then: number().required(),
					}),
				width: number()
					.notRequired()
					.min(5)
					.max(100)
					.when(['length', 'height'], {
						is: (a, b) => Boolean(a || b),
						then: number().required(),
					}),
				height: number()
					.notRequired()
					.min(5)
					.max(100)
					.when(['width', 'length'], {
						is: (a, b) => Boolean(a || b),
						then: number().required(),
					}),
			},
				[
					['length', 'width'],
					['width', 'height'],
					['length', 'height'],
				])
		)
	}
);
