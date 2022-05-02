import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpendsService } from "../services/SpendsServices/CreateSpendsService";
import { DeleteSpendsService } from "../services/SpendsServices/DeleteSpendsService";
import { ListSpendsService } from "../services/SpendsServices/ListSpendsService";
import { UpdateSpendsService } from "../services/SpendsServices/UpdateSpendsService";


class SpendsController {
  async handleCreate(request: Request, response: Response): Promise<Response>{
    const { name, description, cost, id_category }  = request.body;

    const createSpendsService = container.resolve(CreateSpendsService);
    await createSpendsService.execute({ name, description, cost, id_category });

    return response.status(201).send();
  }
  async handleUpdate(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, cost, id_category }  = request.body;

    const updateSpendsService = container.resolve(UpdateSpendsService);
    await updateSpendsService.execute({id, name, description, cost, id_category });

    return response.status(202).send();
  }

  async handleList(request : Request, response : Response) : Promise<Response>{
    const listSpendsService = container.resolve(ListSpendsService)
    const all = await listSpendsService.execute();
    return response.json(all);
  }

  async handleDelete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSpendsService = container.resolve(DeleteSpendsService);
    await deleteSpendsService.execute({ id });

    return response.status(202).send();
  }
}


export { SpendsController }