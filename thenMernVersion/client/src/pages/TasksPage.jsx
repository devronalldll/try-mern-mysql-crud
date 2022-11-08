import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TaskPage() {
  const  {tasks,loadTasks} =useTasks();
  
  useEffect(() => {
    loadTasks();
  }, []);
  function renderMain() {
    if(tasks.length === 0) return <h1>No tasks</h1>
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <>
      <h1>Tasks</h1>
      {renderMain()}
    </>
  );
}
export default TaskPage;
