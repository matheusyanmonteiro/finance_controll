import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoriesService } from "../services/CategoriesServices/CreateCategoriesService";
import { ListCategoriesService } from "../services/CategoriesServices/ListCategoriesService";

class CategoriesController {

  async handleCreate(request: Request, response: Response): Promise<Response>{
    const { name, description }  = request.body;

    const createCategoriesService = container.resolve(CreateCategoriesService);
    await createCategoriesService.execute({ name, description});

    return response.status(201).send();
  }

  async handleList(request : Request, response : Response) : Promise<Response> 
  {
    const listCategoriesService = container.resolve(ListCategoriesService)
    const all = await listCategoriesService.execute();
    return response.json(all);
  }
}

export { CategoriesController }

