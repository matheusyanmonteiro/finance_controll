import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpendsService } from "../services/SpendsServices/CreateSpendsService";
import { ListSpendsService } from "../services/SpendsServices/ListSpendsService";


class SpendsController {
  async handleCreate(request: Request, response: Response): Promise<Response>{
    const { name, description, cost, id_category }  = request.body;

    const createSpendsService = container.resolve(CreateSpendsService);
    await createSpendsService.execute({ name, description, cost, id_category });

    return response.status(201).send();
  }

  async handleList(request : Request, response : Response) : Promise<Response> 
  {
    const listSpendsService = container.resolve(ListSpendsService)
    const all = await listSpendsService.execute();
    return response.json(all);
  }
}


export { SpendsController }