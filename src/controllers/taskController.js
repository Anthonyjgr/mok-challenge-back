import Task from "../models/Task.js";

const getAllTasks = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const offset = (page - 1) * limit;

    const tasks = await Task.findAll({
      offset,
      limit: parseInt(limit),
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error getting tasks" });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: "tasks found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while getting task" });
  }
};

const createTask = async (req, res) => {
  const { name, startDate, deadline, responsible, projectId } = req.body;
  try {
    const task = await Task.create({ name, startDate, deadline, responsible, projectId });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error while creating task" });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, startDate, deadline, responsible, projectId } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.update({ name, startDate, deadline, responsible, projectId });
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while updating task" });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.json({ message: "Task deleted succesfully" });
    } else {
      res.status(404).json({ error: "Tast not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while deleting task" });
  }
};

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
