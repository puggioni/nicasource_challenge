import { Router } from "express";
import {
  AuthenticatedUser,
  Login,
  Register,
} from "../controller/auth.controller";
const router = Router();
router.post("/api/register", Register);
router.post("/api/login", Login);
router.get("/api/user", AuthenticatedUser);

export default router;
