import { Router } from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controller/task.controller";
import {
  AuthenticatedUser,
  Login,
  Register,
} from "../controller/auth.controller";

const router = Router();
//==========USER ROUTES============//
router.post("/api/register", Register);
router.post("/api/login", Login);
router.get("/api/user", AuthenticatedUser);
//==========TASK ROUTES============//
router.post("/api/task", createTask);
router.get("/api/task", getTasks);
router.put("/api/task/:id", updateTask);
router.delete("/api/task/:id", deleteTask);

export default router;
