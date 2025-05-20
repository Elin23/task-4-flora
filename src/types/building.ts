export type building = {
    img: string;
    name: string;
    location: string;
    price: number | string;
    typeOfProperty: 'Residential Property'| 'Commercial Property' | 'Agriculture Property' | 'Industrial Property' | string;
}