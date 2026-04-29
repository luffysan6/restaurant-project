import { Router } from "express";
import {
  AuthHome,
  checkAuth,
  getUser,
  SaveUser,
} from "../controller/auth.controller.js";

const router = Router();

router.get("/", AuthHome);
router.post("/", SaveUser);
router.post("/login", getUser);
router.get("/check", checkAuth);

export default router;
