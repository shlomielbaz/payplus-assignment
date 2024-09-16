import User from "../models/user.model";
import userRepository from "../repositories/user.repository";

class UserService {
  async create(user: User): Promise<User> {
    return await userRepository.save(user);
  }

  async findAll(title: string): Promise<User[]> {
    return await userRepository.retrieveAll();
  }

  async findOne(id: number): Promise<User> {
    return await userRepository.retrieveById(id);
  }

  async update(id: number, user: User): Promise<number> {
    user.id = id;

    return await userRepository.update(user);
  }

  async delete(id: number): Promise<number> {
    return await userRepository.delete(id);
  }

  async deleteAll(): Promise<number> {
    return await userRepository.deleteAll();
  }

  async findAllPublished(): Promise<User[]> {
    return await userRepository.retrieveAll();
  }
}

export default new UserService();
