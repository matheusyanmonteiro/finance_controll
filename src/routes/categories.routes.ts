import { Router } from 'express';

import { CategoriesController } from "../controllers/CategoriesController";

const categoriesRoutes = Router();

const categoriesController = new CategoriesController();

console.log("in here")

categoriesRoutes.post("/", categoriesController.handleCreate);
categoriesRoutes.get("/", categoriesController.handleList);

export { categoriesRoutes }