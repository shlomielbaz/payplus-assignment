import { OkPacket } from "mysql2";
import connection from "../db";

import ICrudRepository from "../interfaces/crud-repository.interface";
import User from "../models/user.model";

class UserRepository implements ICrudRepository<User> {
  filterBy(searchParams: any): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  
  save(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      // need to encrypt the password before inserting
      connection.query<OkPacket>(
        "INSERT INTO users (email, name, idNo, password, phone, birthDay) VALUES(?, ?, ?, ?, ?, ?);",
        [user.email, user.name, user.idNo, user.password, user.phone, user.birthDay],
        (err, res) => {
          if (err) reject(err);
          else
            this.retrieveById(res.insertId)
              .then((user) => resolve(user!))
              .catch(reject);
        }
      );
    });
  }

  retrieveAll(): Promise<User[]> {
    let query: string = "SELECT * FROM users";
    // let condition: string = "";

    // if (searchParams?.title)
    //   condition += `LOWER(title) LIKE '%${searchParams.title}%'`;

    // if (condition.length) query += " WHERE " + condition;

    return new Promise((resolve, reject) => {
      connection.query<User[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  retrieveById(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
      connection.query<User[]>(
        "SELECT * FROM users WHERE id = ?",
        [id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    });
  }

  update(user: User): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "UPDATE users SET email = ?, name = ?, idNo = ?, password = ?, phone = ?, birthDay = ? WHERE id = ?",
        [user.email, user.name, user.idNo, user.password, user.phone, user.birthDay],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  delete(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "DELETE FROM users WHERE id = ?",
        [id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  deleteAll(): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>("DELETE FROM users", (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      });
    });
  }

  findBy(field: string, value: string): Promise<User> {
    return new Promise((resolve, reject) => {
      connection.query<User[]>(
        `SELECT * FROM users WHERE ${field} = ?`,
        [value],
        (err, res) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    });
  }
}

export default new UserRepository();
