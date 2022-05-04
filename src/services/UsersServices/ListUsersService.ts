import { inject, injectable } from "tsyringe";
import { User } from "../../entities/user";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

@injectable()
class ListUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const spends = await this.usersRepository.listAllUser();
    return spends;
  }
}


export { ListUsersService }