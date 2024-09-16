import { OkPacket } from "mysql2";
import connection from "../db";

import Tutorial from "../models/tutorial.model";
import ICrudRepository from "../interfaces/crud-repository.interface";

class TutorialRepository implements ICrudRepository<Tutorial> {

  retrieveAll(): Promise<Tutorial[]> {
    let query: string = "SELECT * FROM tutorials";
    
    return new Promise((resolve, reject) => {
      connection.query<Tutorial[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  save(tutorial: Tutorial): Promise<Tutorial> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "INSERT INTO tutorials (title, description, published) VALUES(?,?,?)",
        [
          tutorial.title,
          tutorial.description,
          tutorial.published ? tutorial.published : false,
        ],
        (err, res) => {
          if (err) reject(err);
          else
            this.retrieveById(res.insertId)
              .then((tutorial) => resolve(tutorial!))
              .catch(reject);
        }
      );
    });
  }

  filterBy(searchParams: {
    title?: string;
    published?: boolean;
  }): Promise<Tutorial[]> {
    let query: string = "SELECT * FROM tutorials";
    let condition: string = "";

    if (searchParams?.published) condition += "published = TRUE";

    if (searchParams?.title)
      condition += `LOWER(title) LIKE '%${searchParams.title}%'`;

    if (condition.length) query += " WHERE " + condition;

    return new Promise((resolve, reject) => {
      connection.query<Tutorial[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  retrieveById(tutorialId: number): Promise<Tutorial> {
    return new Promise((resolve, reject) => {
      connection.query<Tutorial[]>(
        "SELECT * FROM tutorials WHERE id = ?",
        [tutorialId],
        (err, res) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    });
  }

  update(tutorial: Tutorial): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
        [tutorial.title, tutorial.description, tutorial.published, tutorial.id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  delete(tutorialId: number): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "DELETE FROM tutorials WHERE id = ?",
        [tutorialId],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  deleteAll(): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>("DELETE FROM tutorials", (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      });
    });
  }
}

export default new TutorialRepository();
