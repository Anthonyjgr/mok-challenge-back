import BusinessArea from "../models/BussinesArea.js";
import Project from "../models/Project.js";

const getAllBusinessAreas = async (req, res) => {
  try {
    const businessAreas = await BusinessArea.findAll();
    res.status(200).json(businessAreas);
  } catch (error) {
    res.status(500).json({ error: "Error while gettin bussinesAreas" });
  }
};

const getBusinessAreaById = async (req, res) => {
  const { id } = req.params;
  try {
    const businessArea = await BusinessArea.findByPk(id);
    if (businessArea) {
      const projects = await Project.findAll({
        where: { businessAreaId: businessArea.id },
      });
      res.status(200).json({ businessArea, projects });
    } else {
      res.status(404).json({ error: "Bussines area was found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while getting bussinesArea" });
  }
};

const createBusinessArea = async (req, res) => {
  const { AreaName, manager } = req.body;
  try {
    const businessArea = await BusinessArea.create({ AreaName, manager });
    res.status(201).json(businessArea);
  } catch (error) {
    res.status(500).json({ error: "Error while creating bussinesArea" });
  }
};

const updateBusinessAreaById = async (req, res) => {
  const { id } = req.params;
  const { AreaName, manager } = req.body;
  try {
    const businessArea = await BusinessArea.findByPk(id);
    if (businessArea) {
      await businessArea.update({ AreaName, manager });
      res.status(200).json(businessArea);
    } else {
      res.status(404).json({ error: "bussines area was found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while updating bussinesArea" });
  }
};

const deleteBusinessAreaById = async (req, res) => {
  const { id } = req.params;
  try {
    const businessArea = await BusinessArea.findByPk(id);
    if (businessArea) {
      await businessArea.destroy();
      res.status(200).json({ message: "Deleted succesfully" });
    } else {
      res.status(404).json({ error: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while deliting bussinesArea" });
  }
};

export {
  getAllBusinessAreas,
  getBusinessAreaById,
  createBusinessArea,
  updateBusinessAreaById,
  deleteBusinessAreaById,
};
