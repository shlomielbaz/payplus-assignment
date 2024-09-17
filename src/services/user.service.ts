import ICrudService from "../interfaces/crud-service.interface";
import User from "../models/user.model";
import userRepository from "../repositories/user.repository";

class UserService implements ICrudService<User> {
  async add(user: User): Promise<User> {
    return await userRepository.add(user);
  }

  async getAll(): Promise<User[]> {
    return await userRepository.getAll();
  }

  async getById(id: number): Promise<User | undefined> {
    return await userRepository.getById(id);
  }

  async filterBy(searchParams: Partial<User>): Promise<User[]> {
    return await userRepository.filterBy(searchParams);
  }

  async update(id: number, user: User): Promise<number> {
    user.id = id;
    return await userRepository.update(user);
  }

  async delete(id: number): Promise<number> {
    return await userRepository.delete(id);
  }
}

export default new UserService();
