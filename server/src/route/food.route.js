import { Router } from "express";
import {
  deleteMenu,
  GetAllFood,
  SaveFood,
  updateFood,
} from "../controller/food.controller.js";
import upload from "../middleware/upload.middleware.cjs";

const router = Router();

router.get("/", GetAllFood);
router.post("/", upload.array("images"), SaveFood);
router.delete("/:id", deleteMenu);
router.put("/update/:id", upload.array("images"), updateFood);

export default router;
