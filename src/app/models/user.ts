export class User {
    name: string;
    email: string;
    username: string;
    password: string;


    constructor(name: string, email = '', username = '', password = '') {

        this.name = name
        this.email = email
        this.username = username
        this.password = password
    }
}