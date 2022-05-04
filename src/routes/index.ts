import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { profitsRoutes } from "./profits.routes";
import { spendsRoutes } from "./spends.routes";
import { usersRoutes } from "./users.routes";


const router = Router();


router.use("/categories", categoriesRoutes);
router.use("/spends", spendsRoutes);
router.use("/profits", profitsRoutes);
router.use("/users/", usersRoutes)
router.use(authenticateRoutes);

export { router };