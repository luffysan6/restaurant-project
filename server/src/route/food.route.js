import { Router } from "express";
import { Index, SaveFood } from "../controller/food.controller.js";
import upload from "../middleware/upload.middleware.cjs";

const router = Router();

router.get("/", Index);
router.post("/", upload.array("images"), SaveFood);

export default router;
