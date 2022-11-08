import { createConnection } from "mysql2/promise";

// export const connection = createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "remodelar",
// });

export const con = async function main() {
  // const mysql = require('mysql2/promise');
  // create the connection
  const connection = await createConnection({
    host: "localhost",
    user: "root",
    database: "remodelar",
    password: "ronald1230",
  });
  // query database
  const [rows, fields] = await connection.execute("select 1+1 as result");

  return rows[0];
  // const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
};
