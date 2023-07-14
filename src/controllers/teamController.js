import Team from "../models/Team.js";

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: "Error while gettin tems" });
  }
};

const getTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findByPk(id);
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ error: "Team found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while gettin team" });
  }
};

const createTeam = async (req, res) => {
  const { name, members, manager, projectId } = req.body;
  try {
    const team = await Team.create({ name, members, manager, projectId });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: "Error while creating team" });
  }
};

const updateTeam = async (req, res) => {
  const { id } = req.params;
  const { name, members, manager } = req.body;
  try {
    const team = await Team.findByPk(id);
    if (team) {
      await team.update({ name, members, manager });
      res.json(team);
    } else {
      res.status(404).json({ error: "Team not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while updating team" });
  }
};

const deleteTeam = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findByPk(id);
    if (team) {
      await team.destroy();
      res.json({ message: "Team deleted succesfully" });
    } else {
      res.status(404).json({ error: "Team not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while deletting team" });
  }
};

export { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam };
