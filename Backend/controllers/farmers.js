const pool = require("../db/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const farmerSignup = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(req.body);

  if (!username || !email || !password) {
    return res
      .status(400)
      .send("All fields (username, email, password) are required.");
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // SQL query to insert a new user
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  // Execute the query
  pool.query(sql, [username, email, hashedPassword], (err, results) => {
    console.log("getting inside", err);
    if (err) {
      // res.send("Some error occured");
      return res
        .status(500)
        .send("An error occurred while signing up the user.");
    }
    res.status(201).send("User registered successfully!");
  });
};

const JWT_SECRET = process.env.JWT_SECRET;

const farmerLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }

  // SQL query to find the user by email
  const sql = "SELECT * FROM users WHERE email = ?";

  // Execute the query
  pool.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("An error occurred while logging in.");
    }

    if (results.length === 0) {
      return res.status(401).send("Invalid email or password.");
    }

    const user = results[0];

    // Compare the password
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).send("Invalid email or password.");
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful!", token });
  });
};
module.exports = {
  farmerSignup,
  farmerLogin,
};
