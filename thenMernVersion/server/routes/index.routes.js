import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/ping", (req, res) => {
  pool.query("SELECT 1 + 1 as result").then(([rows]) => {
    console.log(rows);
    res.json("pong");
  });
});

router.get("/", (req, res) => {
    pool.query("SELECT * from productos").then((result) => {
      console.log(result);
      res.json(result);
    });
  });

export default router;
