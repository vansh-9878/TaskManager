const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/getTasksDone");

router.route("/").get(getAllTasks);
router.route("/").post(createTasks);
router.route("/:id").get(getTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);

module.exports = router;
