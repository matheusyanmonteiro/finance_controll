import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserService } from "../services/UsersServices/AuthenticateUserService";
import { CreateUserUseCase } from "../services/UsersServices/CreateUserServices";

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
  

  
}

export { UserController };