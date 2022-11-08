import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function TaskForm() {
  const navigate = useNavigate();
  const { createTask, getTask,updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const loadTask = () => {
      if (id) {
        // const task = await getTask(id);
        // console.log("task",task);
        // setTask({
        //   description: task.description,
        //   title: task.title,
        // });
        getTask(id).then(({ data }) => {
          console.log(data);
          setTask({
            description: data.description,
            title: data.title,
          });
        });
      }
    };
    loadTask();
  }, []);

  return (
    <Formik
      initialValues={task}
      enableReinitialize={true}
      onSubmit={async (values, actions) => {
        console.log(values);
        if (id) {
          await updateTask(id, values);
          navigate("/")
        } else {
          await createTask(values);
        }
        // actions.resetForm({
        //   values: {
        //     title: "",
        //     description: "",
        //   },
        // })
        
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <h1>{id ? "Edit Task" : "New Task"}</h1>
          {/* TODO: htmlfor */}
          <label>title</label>
          <input
            type="text"
            name="title"
            placeholder="write a title"
            onChange={handleChange}
            value={values.title}
            required={true}
            autoFocus={true}
          />
          <label>description</label>
          <input
            type="text"
            name="description"
            placeholder="write a description"
            onChange={handleChange}
            value={values.description}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Savig.." : "Save"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default TaskForm;
