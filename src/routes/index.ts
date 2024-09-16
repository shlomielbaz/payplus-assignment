import express, { Application } from "express";
import userRoutes from "./user.router";
import homeRoutes from "./home.routes";
import authRoutes from "./auth.routes";

const router = express.Router();
router.use("/", homeRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;