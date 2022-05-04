import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/interfaces/IUsersRepository";



@injectable()
class UpdateUserService {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({
    id,
    name,
    email,
    password,
    username,
   }: ICreateUserDTO ): Promise<void> {
    
    const passwordHash = await hash(password, 8);

     await this.usersRepository.update({
       name,
       email,
       password: passwordHash,
       username,
       id
     });
  }
}

export { UpdateUserService }