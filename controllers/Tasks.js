import express from "express";
const router=express.Router();

import {getAllTasks} from "../controllers/Tasks.js";

router.route('/').get(getAllTasks)

export default router;