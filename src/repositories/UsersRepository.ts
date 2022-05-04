import { getRepository, Repository } from "typeorm";
import { User } from "../entities/user";
import { AppError } from "../errors/AppError";
import { ICreateUserDTO, IDeleteUserDTO, IUsersRepository } from "./interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async listAllUser(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }

  async update({ id, name, password, email }: ICreateUserDTO): Promise<void> {
      try{
      await this.repository.update({
        id,
      }, {
        name: name,
        password: password,
        email: email,
        updated_at: new Date(),
      });

    } catch {
      throw new AppError("This User does not update"); 
    }  
  }

  async delete({ id }: IDeleteUserDTO): Promise<void> {
    await this.repository.delete(id);
  }

  async create({
    name,
    email,
    username,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      username,
    });
    await this.repository.save(user);

  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };