import { Router } from 'express';
import { ProfitController } from '../controllers/ProfitController';

const profitsRoutes = Router();

const profitController = new ProfitController();


profitsRoutes.post("/", profitController.handleCreate);
profitsRoutes.get("/", profitController.handleList);
profitsRoutes.get("/all", profitController.handleAllProfits);
profitsRoutes.put("/:id", profitController.handleUpdate);
profitsRoutes.delete("/:id", profitController.handleDelete);


export { profitsRoutes }