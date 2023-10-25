import IUserRepository from "../interfaces/IUserRepository";
import { UserDocument } from "../models/User";

export class UserService {
  /**A razão para utilizar o tipo da interface IUserRepository 
   * em vez do tipo UserRepository no construtor do UserService 
   * é aproveitar os princípios do "Dependency Inversion Principle" 
   * (Princípio da Dependência Inversa) do SOLID. 
   * Ao injetar a interface IUserRepository em vez da implementação concreta
   * UserRepository, está seguindo o princípio de depender de abstrações 
   * e não de detalhes. Isso torna seu código mais flexível e mais fácil de manter, 
   * porque você pode trocar a implementação concreta (por exemplo, UserRepository) 
   * por outra implementação que também implemente a interface IUserRepository 
   * sem afetar o código do UserService.*/
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
