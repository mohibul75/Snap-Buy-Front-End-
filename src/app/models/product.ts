export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    constructor(id: number, name: string, description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRhYLxb8pSj3Zq6F4ufZnUAEETG6y58zJSQ&usqp=CAU') {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}