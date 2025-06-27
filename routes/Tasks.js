import express from "express";
const router=express.Router();

import {getAllTasks,createTask,getTask,updateTask,deleteTask} from "../controllers/Tasks.js";

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default router;
/*import express from "express";
const router=express.Router();

router.route('/').get((req,res)=>{
    res.send("all items from");
});

export default router;*/

