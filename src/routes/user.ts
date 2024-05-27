import express from "express";

const router = express.Router();

// controller
import UserController from "../controllers/user";

router.post("/", UserController.insert);
router.post("/:id", UserController.update);
router.patch("/", UserController.remove);
router.get("/", UserController.getItemById);
router.get("/", UserController.getItems);

export default router;
