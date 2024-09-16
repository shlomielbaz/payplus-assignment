import Tutorial from "../models/tutorial.model";
import tutorialRepository from "../repositories/tutorial.repository";

class TutorialService {
  async create(tutorial: Tutorial): Promise<Tutorial> {
    return await tutorialRepository.save(tutorial);
  }

  async findAll(title: string): Promise<Tutorial[]> {
    return await tutorialRepository.retrieveAll();
  }

  async findOne(id: number): Promise<Tutorial> {
    return await tutorialRepository.retrieveById(id);
  }

  async update(id: number, tutorial: Tutorial): Promise<number> {
    tutorial.id = id;

    return await tutorialRepository.update(tutorial);
  }

  async delete(id: number): Promise<number> {
    return await tutorialRepository.delete(id);
  }

  async deleteAll(): Promise<number> {
    return await tutorialRepository.deleteAll();
  }

  async findAllPublished(): Promise<Tutorial[]> {
    return await tutorialRepository.retrieveAll();
  }
}

export default new TutorialService();
