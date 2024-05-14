const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5174", // Replace with your React app's origin
  credentials: true, // Change to 'true' if needed for cookies
  optionSuccessStatus: 200, // some legacy browsers require this
};

app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
  port: 3308,
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  console.log("ENTERED LOGIN");
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

// app.listen(0, () => {
//   console.log(`Listening on port ${server.address().port}`);
// });

app.listen(8081, () => {
  console.log("here");
});
