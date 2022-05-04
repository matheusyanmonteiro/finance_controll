import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserService } from "../services/UsersServices/AuthenticateUserService";
import { CreateUserUseCase } from "../services/UsersServices/CreateUserServices";
import { DeleteUserService } from "../services/UsersServices/DeleteUserService";
import { ListUsersService } from "../services/UsersServices/ListUsersService";
import { UpdateUserService } from "../services/UsersServices/UpdateUserService";

class UserController {
  async handleCreate(request: Request, response: Response) : Promise<Response> {
    const { name, username, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ 
      name, 
      email, 
      password, 
      username });

      return response.status(201).send();
  }

  async handleAuthenticate(request: Request, response: Response): Promise<Response> {
    const { password, username } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserService);

    const authenticateInfo = await authenticateUserUseCase.execute({ password, username });

    return response.json(authenticateInfo);
  }

  async handleUpdate(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password, username }  = request.body;

    const updateSpendsService = container.resolve(UpdateUserService);
    await updateSpendsService.execute({ id, name, email, password, username });

    return response.status(202).send();
  }
  
  async handleDelete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSpendsService = container.resolve(DeleteUserService);
    await deleteSpendsService.execute({ id });

    return response.status(202).send();
  }

  async handleList(request : Request, response : Response) : Promise<Response>{
    const listUsersService = container.resolve(ListUsersService)
    const all = await listUsersService.execute();
    return response.json(all);
  }
  
}

export { UserController };