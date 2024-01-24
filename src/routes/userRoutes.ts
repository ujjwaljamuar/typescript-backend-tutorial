import express, { Router } from "express";
import { getAllUsers } from "../controllers/userController.js";

const router: Router = express.Router();

// router.route("/all").get(getAllUsers)
router.get("/all", getAllUsers);

export default router;
