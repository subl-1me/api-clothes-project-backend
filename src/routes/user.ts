import express from "express";

const router = express.Router();

// controller
import UserController from "../controllers/user";

router.post("/", UserController.insert);
router.patch("/:id", UserController.update);
router.delete("/:id", UserController.remove);
router.get("/", UserController.getList);
// router.get("/:id", UserController.getItemById);

export default router;
