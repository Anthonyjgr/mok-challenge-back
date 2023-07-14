import express from "express";
import {
  getAllBusinessAreas,
  getBusinessAreaById,
  createBusinessArea,
  updateBusinessAreaById,
  deleteBusinessAreaById,
} from "../controllers/businessAreaController.js";

const router = express.Router();

router.get("/business-areas", getAllBusinessAreas);
router.get("/business-areas/:id", getBusinessAreaById);
router.post("/business-areas", createBusinessArea);
router.put("/business-areas/:id", updateBusinessAreaById);
router.delete("/business-areas/:id", deleteBusinessAreaById);

export default router;
