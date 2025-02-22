import { Router } from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/task.controller.js';
import authenticate from '../middleware/user.middleware.js';
const router = Router();

router.use(authenticate);

router.get('/', authenticate, getAllTasks);
router.get('/:id', authenticate, getTaskById);
router.post('/', authenticate, createTask);
router.put('/:id', authenticate, updateTask);
router.delete('/:id', authenticate, deleteTask);

export default router;
