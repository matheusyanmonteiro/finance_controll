import { getRepository, Repository } from "typeorm";
import { User } from "../entities/user";
import { ICreateUserDTO, IDeleteUserDTO, IUsersRepository } from "./interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }
  
  async update({ id, name, password, email }: ICreateUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete({ id }: IDeleteUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
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