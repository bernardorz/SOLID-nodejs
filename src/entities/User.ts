import { v4 as uuid } from 'uuid';


export class User{
    private readonly id : string;

    public name : string;
    public email : string;
    public password : string;

    constructor({ name,email,password }: Omit<User, 'id'>, id?: string){
        const data = {name,email,password}
        Object.assign(this, data)

        if(!id){
            this.id = uuid()
        }

    }
}