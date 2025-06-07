// src/controllers/user.controller.js
import userService from '../services/user.service.js';

class UserController {
  /**
   * @openapi
   * /api/users/create:
   *   post:
   *     summary: Create a new user
   *     tags:
   *       - Authentication
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *             required:
   *               - username
   *               - email
   *               - password
   *     responses:
   *       201:
   *         description: User registered successfully
   *       400:
   *         description: Invalid input
   */
  async createUser(req, res, next) {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  /**
   * @openapi
   * /api/users:
   *   get:
   *     summary: Retrieve a list of all users
   *     tags:
   *       - Users
   *     responses:
   *       200:
   *         description: A list of users
   */
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  /**
   * @openapi
   * /api/users/{id}:
   *   get:
   *     summary: Retrieve a single user by ID
   *     tags:
   *       - Users
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: User ID
   *     responses:
   *       200:
   *         description: User found
   *       404:
   *         description: User not found
   */
  async getUserById(req, res, next) {
    try {
      const user = await userService.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  /**
   * @openapi
   * /api/users/{id}:
   *   put:
   *     summary: Update a user by ID
   *     tags:
   *       - Users
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: User ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               email:
   *                 type: string
   *     responses:
   *       200:
   *         description: User updated successfully
   *       404:
   *         description: User not found
   */
  async updateUser(req, res, next) {
    try {
      const updatedUser = await userService.update(req.params.id, req.body);
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  /**
   * @openapi
   * /api/users/{id}:
   *   delete:
   *     summary: Delete a user by ID
   *     tags:
   *       - Users
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: User ID
   *     responses:
   *       204:
   *         description: User deleted successfully
   *       404:
   *         description: User not found
   */
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
