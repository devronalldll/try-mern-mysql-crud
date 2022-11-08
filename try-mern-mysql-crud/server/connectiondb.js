// const mysql = require('mysql2');
import { createConnection } from "mysql2";

export const connection = createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "ronald1230",
  database: "remodelar",
});
connection.connect(error => {
  if (error) throw error;
  console.log("DB connect")
  
});

// simple query
// connection.query(
//   "SELECT 1 + 1 as result",
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
