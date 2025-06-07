import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', userController.createUser.bind(userController));
router.get('/', userController.getUsers.bind(userController));
router.get('/:id', userController.getUserById.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));
router.delete('/:id', userController.deleteUser.bind(userController));

export default router;
