import { Request, Response } from "express";
import tutorialService from "../services/tutorial.service";
import Tutorial from "../models/tutorial.model";

export default class TutorialController {
  async create(req: Request, res: Response) {
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    try {
      const tutorial: Tutorial = req.body;
      const savedTutorial = await tutorialService.create(tutorial);

      res.status(201).send(savedTutorial);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving tutorials.",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    const title = typeof req.query.title === "string" ? req.query.title : "";

    try {
      const tutorials = await tutorialService.findAll(title);

      res.status(200).send(tutorials);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving tutorials.",
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const tutorial = await tutorialService.findOne(id);

      if (tutorial) res.status(200).send(tutorial);
      else
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
    } catch (err) {
      res.status(500).send({
        message: `Error retrieving Tutorial with id=${id}.`,
      });
    }
  }

  async update(req: Request, res: Response) {
    const tutorial: Tutorial = req.body;
    const id = parseInt(req.params.id);

    try {
      const num = await tutorialService.update(id, tutorial);

      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Error updating Tutorial with id=${id}.`,
      });
    }
  }

  async delete(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const num = await tutorialService.delete(id);

      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Could not delete Tutorial with id==${id}.`,
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const num = await tutorialService.deleteAll();

      res.send({ message: `${num} Tutorials were deleted successfully!` });
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while removing all tutorials.",
      });
    }
  }

  async findAllPublished(req: Request, res: Response) {
    try {
      const tutorials = await tutorialService.findAll("");

      res.status(200).send(tutorials);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving tutorials.",
      });
    }
  }
}
