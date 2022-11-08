import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TasksPage";
import TaskForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ApiTaskPage from "./pages/apiTaskPage";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="/api" element={<ApiTaskPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskProvider>
  );
}
export default App;
