import mongoose from "mongoose";

type Priorities = "urgent" | "optional" | "soon";
type NewTask = {
  task: string;
  priority: Priorities;
  id: string;
};

const taskSchema = new mongoose.Schema({
  task: String,
  priority: String,
});
const Task = mongoose.model("Task", taskSchema);

//save new Task
const saveNewTask = async (task: string, priority: Priorities) => {
  const newTask = new Task({
    task: task,
    priority: priority,
  });
  await newTask.save((err) => {
    if (err) {
      throw err;
    } else {
      return "Document saved successfully.";
    }
  });
};

//return all Tasks
const getAllTasks = async () => {
  const allTasks = await Task.find({});
  return allTasks;
};

//get task by priority
const getByPriority = async (priorityreq: Priorities) => {
  const byPriorytyTasks = await Task.find({ priority: priorityreq });
  return byPriorytyTasks;
};

//get task by task
const getByTask = async (taskreq: string) => {
  const byReqTask = await Task.find({ task: taskreq });
  return byReqTask;
};

//delete task
const deleteTask = async (id: string) => {
  await Task.deleteOne({ _id: id });
};

export {
  NewTask,
  Priorities,
  Task,
  deleteTask,
  getAllTasks,
  getByPriority,
  getByTask,
  saveNewTask,
};
