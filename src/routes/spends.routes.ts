import { Router } from 'express';
import { SpendsController } from '../controllers/SpendsController';

const spendsRoutes = Router();

const spendsController = new SpendsController();


spendsRoutes.post("/", spendsController.handleCreate);
spendsRoutes.get("/", spendsController.handleList);
spendsRoutes.get("/all", spendsController.handleAllSpend);
spendsRoutes.put("/:id", spendsController.handleUpdate);
spendsRoutes.delete("/:id", spendsController.handleDelete);


export { spendsRoutes }