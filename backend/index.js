const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const { Client } = require("pg");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const connectionString = process.env.DATABASE_URL;
app.use(cors());
const client = new Client({
  connectionString: connectionString,
});

async function createTables() {
  try {
    await client.connect();

    const userTable = `
      CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        password VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `;

    const techniciansTable = `
      CREATE TABLE IF NOT EXISTS technicians (
        technician_id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(100),
        photo VARCHAR(225),
        specialization VARCHAR(100),
        description VARCHAR(255),
        phonenumber BIGINT,
        city VARCHAR(50),
        rating INT
      );
    `;

    await client.query(userTable);
    await client.query(techniciansTable);

    console.log("Tables created successfully with data");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
}

createTables();

app.post("/user", async (req, res) => {
  const { email, password } = req.body;
  const getuser = `
    SELECT * FROM users 
    WHERE email = $1;
  `;
  const result = await client.query(getuser, [email]);
  if (result.rowCount === 1) {
    const payload = { email, password };
    const jwtToken = await jwt.sign(payload, "test");
    res.send({ jwtToken }).status(200);
  }
});
app.get("/technician", async (req, res) => {
  const { email, password } = req.body;
  const getuser = `
    SELECT * FROM technicians 
    WHERE email = $1;
  `;
  const result = await client.query(getuser, [email]);
  if (result.rowCount === 1) {
    const payload = { email, password };
    const jwtToken = await jwt.sign(payload, "test");
    res.send({ jwtToken });
  }
});

app.get("/businessowner", async (req, res) => {
  const { email, password } = req.body;
  const getuser = `
    SELECT * FROM technicians 
    WHERE email = $1;
  `;
  const result = await client.query(getuser, [email]);
  if (result.rowCount === 1) {
    const payload = { email, password };
    const jwtToken = await jwt.sign(payload, "test");
    res.send({ jwtToken });
  }
});

app.get("/technicians", async (req, res) => {
  const { city, specialization } = req.query;

  let query = "SELECT * FROM technicians";
  const params = [];
  const conditions = [];

  if (city) {
    conditions.push(`city = $${params.length + 1}`);
    params.push(city);
  }
  if (specialization) {
    conditions.push(`specialization = $${params.length + 1}`);
    params.push(specialization);
  }

  if (conditions.length > 0) {
    query += ` WHERE ${conditions.join(" AND ")}`;
  }

  try {
    const result = await client.query(query, params);

    if (result.rowCount === 0) {
      return res
        .status(404)
        .send("No technicians found for the specified criteria.");
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching technicians:", err);
    res.status(500).send("Error fetching technicians");
  }
});

app.listen(3000, () => {
  console.log("server started at http://localhost:3000");
});
