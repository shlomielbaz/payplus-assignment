import { Router } from "express";
import TutorialController from "../controllers/tutorial.controller";
import { isAuth } from "../middlewares/auth.validation";

const router = Router();
const controller = new TutorialController();

// Create a new Tutorial
router.post("/", isAuth, controller.create);

// Retrieve all Tutorials
router.get("/", isAuth, controller.findAll);

// Retrieve all published Tutorials
router.get("/published", isAuth, controller.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", isAuth, controller.findOne);

// Update a Tutorial with id
router.put("/:id", isAuth, controller.update);

// Delete a Tutorial with id
router.delete("/:id", isAuth, controller.delete);

// Delete all Tutorials
router.delete("/", isAuth, controller.deleteAll);

export default router;
