import { Router } from "express";
import { AuthHome, getUser, SaveUser } from "../controller/auth.controller.js";

const router = Router();

router.get("/", AuthHome);
router.post("/", SaveUser);
router.get("/login", getUser);

export default router;
