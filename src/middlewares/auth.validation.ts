import { NextFunction, Request, Response } from 'express';


export function isAuth(req: Request, res: Response<any>, next: NextFunction) {
  console.log(`Authorized router ${req.originalUrl}`)
  next();
}

export function isValidLogin(req: Request, res: Response<any>, next: NextFunction) {
  const { idNo } = req.body;
  if (/\d{9}/.test(idNo)) {
    next();
  }
  else {
    // throw Error('ID number must be 9 digits')
    res.status(401).send({
      message: "ID number must be 9 digits",
    });
  }
}

export function isValidRegister(req: Request, res: Response<any>, next: NextFunction) {
  const { password, confirmPassword, idNo } = req.body;

  if (password === confirmPassword && /\d{9}/.test(idNo)) {
    next();
  }
  else {
    // throw Error('password and confirm password not identical! ')
    res.status(401).send({
      message: "password and confirm password not identical!",
    });
  }
}