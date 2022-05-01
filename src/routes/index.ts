import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { spendsRoutes } from "./spends.routes";


const router = Router();


router.use("/categories", categoriesRoutes);
router.use("/spends", spendsRoutes);

export { router };