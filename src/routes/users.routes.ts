import { Router } from 'express';
import { UserController } from '../controllers/UserController';


const usersRoutes = Router();

const userController = new UserController();


usersRoutes.post("/", userController.handleCreate);
usersRoutes.put("/:id", userController.handleUpdate);
usersRoutes.delete("/:id", userController.handleDelete);
usersRoutes.get("/", userController.handleList);


export { usersRoutes }