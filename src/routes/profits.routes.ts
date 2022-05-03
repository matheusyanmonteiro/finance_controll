import { Router } from 'express';
import { ProfitController } from '../controllers/ProfitController';

const profitsRoutes = Router();

const profitController = new ProfitController();


profitsRoutes.post("/", profitController.handleCreate);
profitsRoutes.get("/", profitController.handleList);
profitsRoutes.put("/:id", profitController.handleUpdate);
profitsRoutes.delete("/:id", profitController.handleDelete);


export { profitsRoutes }