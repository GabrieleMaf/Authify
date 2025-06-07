// src/controllers/user.controller.js
import userService from '../services/user.service.js';

class UserController {
  async createUser(req, res, next) {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async getUserById(req, res, next) {
    try {
      const user = await userService.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req, res, next) {
    try {
      const updatedUser = await userService.update(req.params.id, req.body);
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const deletedUser = await userService.delete(req.params.id);
      if (!deletedUser) return res.status(404).json({ message: 'User not found' });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
