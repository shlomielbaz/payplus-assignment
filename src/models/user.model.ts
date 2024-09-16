import { RowDataPacket } from "mysql2";

export default interface User extends RowDataPacket {
    id: number;
    name?: string;
    idNo?: string;
    password?: string;
    phone?: string;
    email?: string;
    birthDay?: string;
  }