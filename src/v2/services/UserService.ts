import IUserRepository from "../interfaces/IUserRepository";
import { UserDocument } from "../models/User";

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(userData: Partial<UserDocument>) {
    const user = await this.userRepository.create(userData);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async updateUser(id: string, userData: Partial<UserDocument>) {
    const user = await this.userRepository.update(id, userData);
    return user;
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }
}
