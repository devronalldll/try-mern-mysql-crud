import axios from "axios";
// #TODO : AWAIT TO THEN
// export const createTaskRequest = async (task) => {
//   await fetch("http://localhost:3000/tasks",task);
// };
export const createTaskRequest = (task) =>
  axios
    .post("http://192.168.1.101:4000/tasks", task)
    .then((response) => response);
// export const createTaskRequest = (task) => {
//  return fetch("http://localhost:4000/tasks",task).then((response) => response);
// };
export const getTasksRequest = () =>
  axios.get("http://192.168.1.101:4000/tasks").then((response) => response);
export const deleteTaskRequest = (id) =>
  axios
    .delete(`http://192.168.1.101:4000/tasks/${id}`)
    .then((response) => response);

export const getTaskRequest = (id) =>
  axios
    .get(`http://192.168.1.101:4000/tasks/${id}`)
    .then((response) => response);

export const updateTaskRequest = (id, task) =>
  axios
    .put(`http://192.168.1.101:4000/tasks/${id}`, task)
    .then((response) => response);

export const apiProxy = () => axios.get("/tasks").then((response) => response);
