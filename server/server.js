const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = 8000;

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

app.post("/addCity", jsonParser, async (req, res) => {
  await insertData(req.body.city);
  res.json({
    msg: "City Added",
    status: 200,
    city: req.body.city,
  });
});

async function insertData(cityName) {
  return await pool.query(
    `INSERT INTO cities (city_name) VALUES ('${cityName}');`
  );
}

async function testDB() {
  const [rows] = await pool.query(`select * from cities`);
  console.log(rows);
}

// testDB();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
