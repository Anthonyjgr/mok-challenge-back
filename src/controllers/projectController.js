import Project from "../models/Project.js";
import Task from "../models/Task.js";
import Team from "../models/Team.js";

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error while getting projects" });
  }
};

const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (project) {
      const tasks = await Task.findAll({ where: { projectId: project.id } });
      const team = await Team.findAll({ where: { projectId: project.id } });

      res.status(200).json({ project, tasks, team });
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while getting project" });
  }
};

const createProject = async (req, res) => {
  const { name, manager, start, deadline, status, businessAreaId } = req.body;
  try {
    const project = await Project.create({
      name,
      manager,
      start,
      deadline,
      status,
      businessAreaId,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: "Error while creating project" });
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, manager, start, deadline, status, businessAreaId } = req.body;
  try {
    const project = await Project.findByPk(id);
    if (project) {
      await project.update({ name, manager, start, deadline, status, businessAreaId });
      res.json(project);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while updatting project" });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (project) {
      await project.destroy();
      res.json({ message: "Deleted succesfully" });
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while deleting the project" });
  }
};

export { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
