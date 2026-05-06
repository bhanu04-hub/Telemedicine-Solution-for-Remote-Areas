const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();   // ✅ FIRST create app

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ✅ Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bhanu@04",   // put your mysql password if any
  database: "telemedicine"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

// ✅ Register API (AFTER app is created)
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO patients (name, email, password) VALUES ("bhanu","bhanu@gmail.com", "1234")";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error inserting data");
    } else {
      res.send("Patient Registered Successfully");
    }
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM patients WHERE email ="bhanu@gmail.com" AND password ="1234"";
  
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error occurred");
    } else {
      if (result.length > 0) {
        res.send("Login Successful");
      } else {
        res.send("Invalid Email or Password");
      }
    }
  });
});
app.post("/login", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  const sql = "SELECT * FROM patients WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error occurred");
    } else {
      if (result.length > 0) {
        res.send("Login Successful");
      } else {
        res.send("Invalid Email or Password");
      }
    }
  });
});
