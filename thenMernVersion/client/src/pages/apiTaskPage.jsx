import { useEffect, useState } from "react";
import { apiProxy } from "../api/tasks.api";

function ApiTaskPage() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    apiProxy().then((res) => setTasks(res.data));
  }, []);
  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
}
export default ApiTaskPage;
