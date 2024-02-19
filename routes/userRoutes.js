import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, login, updateUser } from '../controller/userController.js';

const router = express.Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)
router.route('/login').post(login)

export default router