export interface Menu{
    _id: string;
    guid: string;
    title: string;
    recipe: string[];
    ratings: number;
    price: string;
    type: 'veg'|'nonveg';
    tags: string[];
    imgSrc: string
}