import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { AppError } from "../../errors/AppError";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/interfaces/IUsersRepository";



@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({
    name,
    email,
    password,
    username,
   }: ICreateUserDTO ): Promise<void> {
    
    const userAlreadyExists = await this.usersRepository.findByUsername(username);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

     await this.usersRepository.create({
       name,
       email,
       password: passwordHash,
       username
     });
  }
}

export { CreateUserUseCase }