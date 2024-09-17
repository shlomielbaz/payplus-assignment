import { Request, Response } from "express";
import userService from "../services/user.service";
import User from "../models/user.model";
const bcrypt = require('bcrypt');

export default class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { idNo, password } = req.body;
      const users = await userService.filterBy({ 'idNo': idNo } as Partial<User>);
      const user = users[0];
      const isTrue = user && await bcrypt.compare(password, user.password) || false;

      if (!isTrue) {
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
        message: "Some error occurred while login user.",
      });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { password, idNo, email, name } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const savedUser = await userService.add({idNo: idNo, email: email, name: name, password: hashedPassword} as User);
      res.status(201).send(savedUser);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while registering user.",
      });
    }
  }
}