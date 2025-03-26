import express from "express";
import { getUser, updateUser, deleteUser } from "../controllers/userController.js";
import { authMiddleware, authorizeRoles } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/:id", authMiddleware, getUser);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, authorizeRoles("isAdmin"), deleteUser);

export default router;