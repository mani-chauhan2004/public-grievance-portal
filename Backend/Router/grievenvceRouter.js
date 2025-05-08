import express from 'express';
import classifyGrievance from '../middleware/openai.middleware.js';
import {
    submitGrievance,
    getUserGreivance,
    getDepartmentGrievances,
    updateGrievanceStatus,
    getAllGrievances
} from '../Controller/grievance.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.middleware.js';

const grievanceRouter = express.Router();

// Citizen submits grievance
grievanceRouter.post("/submit", requireAuth, classifyGrievance, submitGrievance);

// Citizen views own grievances
grievanceRouter.get("/my", requireAuth, getUserGreivance);

// Officer views department grievances
grievanceRouter.get("/department", requireAuth, requireRole("officer"), getDepartmentGrievances);

// Officer/Admin updates grievance status
grievanceRouter.put("/:id/status", requireAuth, requireRole(["officer", "admin"]), updateGrievanceStatus);
grievanceRouter.get('/all', requireAuth, requireRole("admin"), getAllGrievances)

export default grievanceRouter;
