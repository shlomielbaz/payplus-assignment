import { Request, Response } from "express";

export function login(req: Request, res: Response): Response {
  console.log("Login to PayPlus assignment application.")
  return res.json({ message: "Login to PayPlus assignment application." });
}

export function register(req: Request, res: Response): Response {
  return res.json({ message: "Register to PayPlus assignment application." });
}
