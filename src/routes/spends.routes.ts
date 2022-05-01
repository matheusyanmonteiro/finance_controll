import { Router } from 'express';
import { SpendsController } from '../controllers/SpendsController';

const spendsRoutes = Router();

const spendsController = new SpendsController();


spendsRoutes.post("/", spendsController.handleCreate);


export { spendsRoutes }