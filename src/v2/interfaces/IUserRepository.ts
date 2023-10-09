import { UserDocument } from '../models/User';

export default interface IUserRepository {
  findAll(): Promise<UserDocument[]>;
  findById(id: string): Promise<UserDocument | null>;
  create(data: Partial<UserDocument>): Promise<UserDocument>;
  update(id: string, data: Partial<UserDocument>): Promise<UserDocument | null>;
  delete(id: string): Promise<void>;
}
