import express, { Application } from "express";
import tutorialRoutes from "./tutorial.routes";
import userRoutes from "./user.router";
import homeRoutes from "./home.routes";

const router = express.Router();

router.use("/", homeRoutes);
router.use("/tutorials", tutorialRoutes);
router.use("/users", userRoutes);

export default router;