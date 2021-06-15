import { MailtrapMailProvider } from "../../providers/implementations/MaltrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementations/ProstgressUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProvider = new MailtrapMailProvider()

const postgressUsersRepository = new PostgressUsersRepository()


const createUserUseCase = new CreateUserUseCase(
    postgressUsersRepository,
    mailTrapProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }