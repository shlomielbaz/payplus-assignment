import { OkPacket } from "mysql2";
import connection from "../db";

import ICrudRepository from "../interfaces/crud-repository.interface";
import User from "../models/user.model";

class UserRepository implements ICrudRepository<User> {
  add(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      // need to encrypt the password before inserting
      connection.query<OkPacket>(
        "INSERT INTO users (email, name, idNo, password, phone, birthDay) VALUES(?, ?, ?, ?, ?, ?);",
        [user.email, user.name, user.idNo, user.password, user.phone, user.birthDay],
        (err, res) => {
          if (err) reject(err);
          else
            this.getById(res.insertId)
              .then((user) => resolve(user!))
              .catch(reject);
        }
      );
    });
  }

  getAll(): Promise<User[]> {
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

  getById(id: number): Promise<User> {
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

  // findBy(field: string, value: string): Promise<User> {
  //   return new Promise((resolve, reject) => {
  //     connection.query<User[]>(
  //       `SELECT * FROM users WHERE ${field} = ?`,
  //       [value],
  //       (err, res) => {
  //         if (err) reject(err);
  //         else resolve(res?.[0]);
  //       }
  //     );
  //   });
  // }

  filterBy(searchParams: Partial<User>): Promise<User[]> {
    const keys: string[] = [];
    const values: string[] = [];
    for (const key in searchParams) {
      keys.push(key)
      values.push(searchParams[key])
    }
    return new Promise((resolve, reject) => {
      connection.query<User[]>(
        `SELECT * FROM users WHERE ${keys.join(' = ?, ')} = ?`,
        values,
        (err, res) => {
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  }
}

export default new UserRepository();
