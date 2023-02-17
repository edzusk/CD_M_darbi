import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import {
  deleteTask,
  getAllTasks,
  getByPriority,
  getByTask,
  NewTask,
  Priorities,
  saveNewTask,
} from "./utils";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
//========================================================================

//create connection to todolist DB
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/todoList");
};

//cach errors
main().catch((err) => console.log("error:", err));

//----------------------------------------------------
//send all tasks
app.get("/tasks/", async (req: Request, res: Response) => {
  const answer = await getAllTasks();
  res.send(answer);
});

//send tasks by priority
app.get("/tasks/:priority", async (req: Request, res: Response) => {
  const priority = <Priorities>req.params.priority;
  const answer = await getByPriority(priority);
  res.send(answer);
});

//send task by task
app.get("/tasks/single/:task", async (req: Request, res: Response) => {
  const task = req.params.task;
  const answer = await getByTask(task);
  res.send(answer);
});

//add new task to db
app.post(
  "/tasks/post",
  async (req: Request<null, null, NewTask>, res: Response) => {
    const newTask = req.body.task;
    const newTaskPriority = req.body.priority;
    saveNewTask(newTask, newTaskPriority).then((data) => {
      res.send(data);
    });
  }
);

//Delete task
app.delete("/delete/:id", (req: Request<any, null, NewTask>, res: Response) => {
  const taskToDel = req.params.id;
  deleteTask(taskToDel).then((data) => {
    res.send(data);
  });
});
