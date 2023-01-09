import { Router } from "express";
import {
  AuthenticatedUser,
  Login,
  Refresh,
  Register,
} from "../controller/auth.controller";
const router = Router();
router.post("/api/register", Register);
router.post("/api/login", Login);
router.get("/api/user", AuthenticatedUser);
router.post("/api/refresh", Refresh);

export default router;
