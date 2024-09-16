import { Request, Response } from "express";
import userService from "../services/user.service";
import User from "../models/user.model";
const bcrypt = require('bcrypt');

export default class AuthController {
  async login(req: Request, res: Response) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    try {
      const { idNo, password } = req.body;
      const user = await userService.findBy('idNo', idNo);
      const isTrue = await bcrypt.compare(password, user.password);

      if (!user || !isTrue) {
        res.status(401).send({
          message: "Invalid id number or password",
        });
      }
      else {
        // redirect to main page (user list)
        res.status(201).send(user);
      }
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while creating user.",
      });
    }
  }
  async register(req: Request, res: Response) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    try {
      const user: User = req.body;
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const savedUser = await userService.create({...user, password: hashedPassword, 
        confirmPassword: null});

      res.status(201).send(savedUser);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while creating user.",
      });
    }
  }


}