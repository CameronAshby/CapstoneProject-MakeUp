import {Product} from './product';
import {Order} from './Order';

export interface User {
    name: string;
    email: string;
    cart: Product[];
    purchaseHistory?: Order[];
    favorites?: Product[];
    ratings?: any[];
    password?: string;
}
