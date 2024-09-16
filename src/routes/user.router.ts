import { Router } from "express";
import { isAuth } from "../middlewares/auth.validation";
import UserController from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

// User CRUD Operations
router.post("/", isAuth, controller.create);
router.put("/:id", isAuth, controller.update);
router.get("/:id", isAuth, controller.findOne);
router.get("/", isAuth, controller.findAll);
router.delete("/:id", isAuth, controller.delete);

export default router;
