import { Router } from "express";
import { UserController } from "../controllers/UserController";


const authenticateRoutes = Router();

const authenticateUseController = new UserController();

authenticateRoutes.post("/sessions", authenticateUseController.handleAuthenticate);

export { authenticateRoutes };
