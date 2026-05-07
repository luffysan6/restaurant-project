import { Router } from "express";
import {
  CancelOrderForUser,
  CreateOrder,
  DeleteOrderById,
  GetAllOrderAdmin,
  GetAllOrderUser,
} from "../controller/order.controller.js";

const router = Router();

router.get("/", GetAllOrderAdmin); // secure
router.get("/user/:id", GetAllOrderUser); // secure
router.post("/", CreateOrder); // secure
router.delete("/:id", DeleteOrderById); // secure
router.post("/order/:id", CancelOrderForUser); // secure
// anyone can make reqest to this api
// we need secure them
// router.post("/:id", "update order status for admin");

export default router;
