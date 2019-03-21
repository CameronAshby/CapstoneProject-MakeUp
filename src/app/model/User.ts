import {Product} from './product';

export interface User {
    name: string;
    email: string;
    cart: Product[];
    password?: string;
}
