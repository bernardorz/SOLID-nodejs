import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { UsersRepository } from "../../repositories/UserRepository";
import { ICreateUserRequestDTO } from './CreateUserDTO'
export class CreateUserUseCase{


    constructor( 
        private userRepository : UsersRepository,
        private mailProvider: IMailProvider
        
        ){}

    async execute( data : ICreateUserRequestDTO){
       const userALreadyExist = await  this.userRepository.findByEmail(data.email)


       if(userALreadyExist){
           throw new Error('user already exist')
       }

       const user = new User(data)

       await this.userRepository.save(user)

       await this.mailProvider.sendMail({
           to : {
               name : data.name,
               email : data.email
           },
           from : {
               name : 'equipe',
               email : 'equipe@gmail.com'
           },
           subject : 'welcome',
           body : '<p> faz login  </p>'

       })
    }
} 