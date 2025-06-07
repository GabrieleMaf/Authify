// src/services/user.service.js
import CrudService from './crud.service.js';
import UserModel from '../models/user.model.js';

class UserService extends CrudService {
  async findByEmail(email) {
    return this.model.findOne({ email }).exec();
  }
}

export default new UserService(UserModel);
