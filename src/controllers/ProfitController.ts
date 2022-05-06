import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProfitsService } from "../services/ProfitsServices/CreateProfitsService";
import { DeleteProfitsService } from "../services/ProfitsServices/DeleteProfitsService";
import { ListProfitsService } from "../services/ProfitsServices/ListProfitsService";
import { UpdateProfitsService } from "../services/ProfitsServices/UpdateProfitsService";



class ProfitController {
  async handleCreate(request: Request, response: Response): Promise<Response>{
    const { title, gain, id_user }  = request.body;

    const createSpendsService = container.resolve(CreateProfitsService);
    await createSpendsService.execute({ title, gain, id_user });

    return response.status(201).send();
  }
  async handleUpdate(request: Request, response: Response): Promise<Response> {
     const { id } = request.params;
     const { title, gain, id_user }  = request.body;

     const updateProfitsService = container.resolve(UpdateProfitsService);
     await updateProfitsService.execute({id, title, gain, id_user });

     return response.status(202).send();
  }

  async handleList(request : Request, response : Response) : Promise<Response>{
    const listProfits = container.resolve(ListProfitsService)
    const all = await listProfits.execute();
    return response.json(all);
  }

  async handleDelete(request: Request, response: Response): Promise<Response> {
     const { id } = request.params;

     const deleteProfitsService = container.resolve(DeleteProfitsService);
     await deleteProfitsService.execute({ id });

     return response.status(202).send();

    throw new Error();
  }
}

export { ProfitController };