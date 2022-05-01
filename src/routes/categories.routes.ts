import { Router } from 'express';

import { CategoriesController } from "../controllers/CategoriesController";

const categoriesRoutes = Router();

const categoriesController = new CategoriesController();

categoriesRoutes.post("/", categoriesController.handleCreate);
categoriesRoutes.get("/", categoriesController.handleList);

export { categoriesRoutes }