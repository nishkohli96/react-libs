export enum Colors {
  Blue = 'Blue',
  Red = 'Red',
  Black = 'Black',
  Orange = 'Orange',
  White = 'White',
}
export enum ItemShape {
  Square = 'Square',
  Cube = 'Cube',
  Spherical = 'Spherical',
  Irregular = 'Irregular',
}

interface Item {
  name: string;
  description: string;
  shape: ItemShape;
  length: number | null;
  width: number | null;
  height: number | null;
}

export interface FormType {
  reqdText: string;
  quantity: number | null;
  color: Colors;
  items: Item[];
}
