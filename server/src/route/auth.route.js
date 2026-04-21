import { Router } from "express";
import { AuthHome, SaveUser } from "../controller/auth.controller.js";

const router = Router();

router.get("/", AuthHome);
router.post("/", SaveUser);

export default router;
