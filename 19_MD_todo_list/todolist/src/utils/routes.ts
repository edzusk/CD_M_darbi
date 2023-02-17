import axios, { Axios } from "axios";


type Priority = "urgent" | "optional" | "soon";

const taskEndpoints = {
  host: "http://localhost:3004",
  allTasks: "http://localhost:3004/tasks/",
  deletePath: (id:string) => `http://localhost:3004/delete/${id}`, 
  postPath: "http://localhost:3004/tasks/post",
  singlePostPath: (task:string) =>  `http://localhost:3004/tasks/single/${task}`,
  priorityPath: (priority:Priority) => `http://localhost:3004/tasks/${priority}`,
}

export default taskEndpoints;

const getAllTasks = async () => {
  const { data } = await axios.get(taskEndpoints.allTasks);
  return data
}

const getByPrior = async (priority:Priority) => {
  const { data } = await axios.get(taskEndpoints.priorityPath(priority));
  return data
}
const getbyTask = async (task:string) => {
  const {data} = await axios.get(taskEndpoints.singlePostPath(task));
  return data
}

const deleteTask =  (id:string) => {
  const tasktodelete = {id}
  axios.delete(taskEndpoints.deletePath(id))
}

const addTask = (task:string, priority:Priority) => {
  axios.post(taskEndpoints.postPath, {task, priority})
}
export {
  getAllTasks,
  getByPrior,
  getbyTask,
  deleteTask,
  addTask
};
export type { Priority };
