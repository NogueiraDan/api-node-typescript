import { Model } from 'mongoose';
import { UserDocument } from '../models/User';
import IUserRepository from '../interfaces/IUserRepository';

export default class UserRepository implements IUserRepository {

  constructor(private userModel: Model<UserDocument>) {}

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id);
  }

  async create(data: Partial<UserDocument>): Promise<UserDocument> {
    return this.userModel.create(data);
  }

  async update(id: string, data: Partial<UserDocument>): Promise<UserDocument | null> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndRemove(id);
  }
}
