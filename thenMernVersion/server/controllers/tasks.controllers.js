import { pool } from "../db.js";

export const getTasks = (req, res) => {
  pool
    .query("SELECT * FROM tasks ORDER BY createAt DESC")
    .then((result) => res.json(result[0]))
    .catch((err) => res.status(500).json(err));
};
export const getTask = (req, res) => {
  console.log(req.params.id);
  pool
    .query("SELECT * FROM tasks WHERE id = ?", [req.params.id])
    .then(([result]) => {
      if (result.length === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(result[0]);
    })
    .catch((err) => res.status(500).json(err));
};
export const createTask = (req, res) => {
  const { title, description } = req.body;
  //   const [result] = await pool.query(
  //     "INSERT INTO tasks(title,description) VALUES(?,?)",
  //     [title, description],
  //     (err, result) => {
  //       if (err) throw err;
  //     }
  //   );
  //   console.log(result);
  //   res.json({
  //     id: result.insertId,
  //     title,
  //     description,
  //   });
  pool
    .query("INSERT INTO tasks(title,description) VALUES(?,?)", [
      title,
      description,
    ])
    .then(([result]) => {
      console.log(result);
      res.json({
        id: result.insertId,
        title,
        description,
      });
    })
    .catch((e) => {
      console.error(e);
    });
};
export const updateTask = (req, res) => {
  // const { title, description } = req.body;
  pool
    .query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json({ message: "Task updated"});
    })
    .catch((err) => res.status(500).json(err));
};
export const deleteTask = (req, res) => {
  console.log(req.params.id);
  pool
    .query("DELETE FROM tasks WHERE id = ?", [req.params.id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(204).json({ message: "Task deleted" });
    })
    .catch((err) => res.status(500).json(err));
};
