import { User } from "../../entities/User";
import { UsersRepository } from "../UserRepository";

export class PostgressUsersRepository implements UsersRepository{

    private users : User[] = [];

    async findByEmail(email : string) : Promise<User>{

        const user = this.users.find(user => user.email === email )


        return user

    }

    async save(user : User) : Promise<void>{

        this.users.push(user)


    }
}