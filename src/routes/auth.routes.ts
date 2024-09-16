import { Router } from "express";
import { isAuth, isValidLogin, isValidRegister } from "../middlewares/auth.validation";
import AuthController from "../controllers/auth.controller";


const router = Router();
const controller = new AuthController();

router.post("/login", isValidLogin, controller.login);
router.post("/register", isValidRegister, controller.register);

export default router;
