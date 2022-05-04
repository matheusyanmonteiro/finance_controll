import { inject, injectable } from "tsyringe";
import { AppError } from "../../errors/AppError";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({ id }: IRequest): Promise<void> {
   if (! await this.usersRepository.findById(id)){
     throw new AppError("This User does not exists");
   }

   this.usersRepository.delete({ id });
  }
}

export { DeleteUserService }