const { loginSchema } = require("../schemas/loginSchema");
const { validateForm } = require("./validateForm");
const bcrypt = require("bcrypt");
const pool = require("../db");

exports.loginUser = async (req, res) => {
  validateForm(req, res);
  res.status(200).json({ message: "login successful" });
};

exports.signUpUser = async (req, res) => {
  validateForm(req, res);
  const { username, password } = req.body;
  const existingUser = await pool.query(
    "SELECT username from users WHERE username=$1",
    [username]
  );
  if (existingUser.rowCount === 0) {
    //hashing before saving
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      "INSERT INTO users(username,passhash) VALUES($1,$2) RETURNING username",
      [username, password]
    );
    //register
    res.json({ loggedIn: true, username });
  } else {
    res.json({ loggedIn: false, message: "Username already exists" });
  }
  res.status(200).json({ message: "sign up successful" });
};
