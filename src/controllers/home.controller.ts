import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
  console.log("Welcome to PayPlus assignment application.")
  return res.json({ message: "Welcome to PayPlus assignment application." });
}
