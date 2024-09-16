import { NextFunction, Request, Response } from 'express';


export function isAuth(req: Request, res: Response<any>, next: NextFunction) {
  console.log(`Authorized router ${req.originalUrl}`)
  next();
}

export function isValidLogin(req: Request, res: Response<any>, next: NextFunction) {
  const { idNo } = req.body;
  if (!/\d{9}/.test(idNo)) {
    res.status(401).send({
      message: "ID number must be 9 digits",
    });
  }
  else {
     next();
  }
}

export function isValidRegister(req: Request, res: Response<any>, next: NextFunction) {
  const { password, confirmPassword, idNo } = req.body;
  if (!/\d{9}/.test(idNo)) {
    res.status(401).send({
      message: "ID number must be 9 digits",
    });
  }
  if (password !== confirmPassword) {
    res.status(401).send({
      message: "password and confirm password not identical!",
    });
  }
  else {
    next();
  }
}