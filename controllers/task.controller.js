import {
    createTaskForUser,
    getAllTasksForUser,
    getTaskByIdForUser,
    updateTaskForUser,
    deleteTaskForUser,
  } from '../services/task.service.js';
  
  export const createTask = async (req, res, next) => {
    try {
      const userId = req.params.id;
      
      const taskData = req.body;
      const task = await createTaskForUser(userId, taskData);
      res.status(201).json({ success: true, task });
    } catch (error) {
      next(error);
    }
  };
  
  export const getAllTasks = async (req, res, next) => {
    try {
      const { priority, status, dueDateFrom, dueDateTo, sortBy, page, limit } =
        req.query;
  
      const userId = req.params.id;
  
      const allTasks = await getAllTasksForUser(userId, {
        priority,
        status,
        dueDateFrom,
        dueDateTo,
        sortBy,
        page,
        limit,
      });
  
      res.json({
        success: true,
        tasks: allTasks.rows,
        totalTasks: allTasks.count,
        page: page || 1,
        limit: limit || 10,
        totalPages: Math.ceil(allTasks.count / (limit || 10)),
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const getTaskById = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const taskId = req.query.taskId;
      
      const task = await getTaskByIdForUser(taskId, userId);

      res.json({ success: true, task });
    } catch (error) {
      next(error);
    }
  };
  
  export const updateTask = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const taskId = req.query.taskId;
      
      const taskData = req.body;
      const updatedTask = await updateTaskForUser(taskId, userId, taskData);
      res.json({ success: true, task: updatedTask });

    } catch (error) {
      next(error);
    }
  };
  
  export const deleteTask = async (req, res, next) => {
    try {
      const { id } = req.query;
  
      const userId = req.params.id;
      await deleteTaskForUser(id, userId);
      res.json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  