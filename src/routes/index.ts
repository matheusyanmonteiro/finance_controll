import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { profitsRoutes } from "./profits.routes";
import { spendsRoutes } from "./spends.routes";


const router = Router();


router.use("/categories", categoriesRoutes);
router.use("/spends", spendsRoutes);
router.use("/profits", profitsRoutes);

export { router };