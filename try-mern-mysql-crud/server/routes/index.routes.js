import { Router } from "express";
import { pool } from "../db.js";
// import { connection } from "../connectiondb.js";
// import { con } from "../promisedb.js";
const router = Router();

router.get("/pang", async (req, res) => {
  const [rows] = await pool.query("SELECT 1 + 1 as result");
  console.log(rows[0]);
  res.json(rows[0]);
});
// router.get("/pong", (req, res) => {
//   connection.query("SELECT 1 + 1 as result", function (err, results, fields) {
//     console.log(results);
//     // console.log(fields);
//     res.json(results);
//   });
// });
// router.get("/ping", async (req, res) => {
//   const rows = await con();
//   console.log(rows);
//   res.json(rows);  
// });
export default router;
