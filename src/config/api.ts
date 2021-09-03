import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://0.0.0.0:5002'
export const productsUrl = baseUrl + '/api/product/get'
export const cartUrl = baseUrl + '/cart'
export const wishlistUrl = baseUrl + '/wishlist'
export const user = baseUrl + '/user'