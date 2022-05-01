import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpendsService } from "../services/SpendsServices/CreateSpendsService";


class SpendsController {
  async handleCreate(request: Request, response: Response): Promise<Response>{
    const { name, description, cost, id_category }  = request.body;

    const createSpendsService = container.resolve(CreateSpendsService);
    await createSpendsService.execute({ name, description, cost, id_category });

    return response.status(201).send();
  }

  async handleList(request : Request, response : Response) : Promise<Response> 
  {
    throw new Error("not implements");
  }
}

export { SpendsController }