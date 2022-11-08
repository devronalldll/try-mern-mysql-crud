import { useContext, useState } from "react";
import { createContext } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "../api/tasks.api";
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};
export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  function loadTasks() {
    getTasksRequest().then((res) => setTasks(res.data));
  }
  const deleteTask = (id) => {
    deleteTaskRequest(id)
      .then(() => setTasks(tasks.filter((task) => task.id !== id))) //TODO : study this line // refresh the list of tasks
      .catch((err) => console.log(err));
  };
  const createTask = (task) => {
    createTaskRequest(task)
      .then((res) => {
        console.log(res.data);
        // setTasks([...tasks, response.data]); //TODO : study this line // refresh the list of tasks
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getTask = (id) =>
    getTaskRequest(id)
      .then((res) => res)
      .catch((err) => console.log(err));
  // const getTask = (id) => {
  //   getTaskRequest(id)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };
  // const getTask =async(id) => {
  //   const res=await getTaskRequest(id).catch((err) => console.log(err));
  //   return res.data;
  // };
  const updateTask = (id, task) => {
    updateTaskRequest(id, task)
      .then((res) => res)
      .catch((err) => console.log(err));
  };
  return (
    <TaskContext.Provider
      value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
