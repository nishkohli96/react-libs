export enum Colors {
	Blue = 'Blue',
	Red = 'Red',
	Black = 'Black',
	Orange = 'Orange',
	White = 'White'
}
export enum ItemShape {
	Square = 'Square',
	Cube = 'Cube',
	Spherical = 'Spherical',
	Irregular = 'Irregular'
}

interface Item {
    name: string;
    description: string;
    shape: ItemShape;
    length: number | string;
    width: number | string;
    height: number | string;
}

export interface FormType {
    reqdText: string;
	optionalText: string;
	color: Colors;
	items: Item[]
}