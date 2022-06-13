const express = require("express");
const router = express.Router();
const { getLoans, getPayments, getProfile } = require("./controller.js");

router.get("/loans/:id", getLoans);
router.get("/payments/:id", getPayments);
router.get("/profile/:id", getProfile);
//tasksRouter.get("/get-task/:id", getTask);
//tasksRouter.post("/create", createTask);
//tasksRouter.put("/update", updateTask);
//tasksRouter.delete("/delete-task", deleteTask);

module.exports = router;