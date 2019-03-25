import {Product} from './product';

export interface User {
    name: string;
    email: string;
    cart: Product[];
    orders?: Product[];
    favorites?: Product[];
    ratings?: [];
    password?: string;
}
