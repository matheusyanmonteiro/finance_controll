import { Router } from 'express';
import { UserController } from '../controllers/UserController';


const usersRoutes = Router();

const userController = new UserController();


usersRoutes.post("/", userController.handleCreate);
//usersRoutes.get("/", userController.handleList);
//usersRoutes.put("/:id", userController.handleUpdate);
//usersRoutes.delete("/:id", userController.handleDelete);


export { usersRoutes }