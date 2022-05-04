import { User } from "../../entities/user";

interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  username: string;
  id?: string;
}

interface IDeleteUserDTO {
  id: string;
}

interface IUsersRepository {
  create({ name, password, email, username }: ICreateUserDTO ): Promise<void>;
  findByUsername(username: string): Promise<User>;
  findById(id: string): Promise<User>;
  update( {id, name, password, email }: ICreateUserDTO ): Promise<void>;
  delete( { id }: IDeleteUserDTO): Promise<void>;
  listAllUser(): Promise<User[]>;

}

export { IUsersRepository, IDeleteUserDTO, ICreateUserDTO }