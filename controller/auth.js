const { loginSchema } = require("../schemas/loginSchema");
const { validateForm } = require("./validateForm");

exports.loginUser = async (req, res) => {
  validateForm(req, res);
  res.status(200).json({ message: "login successful" });
};

exports.signUpUser = async (req, res) => {
  validateForm(req, res);
  res.status(200).json({ message: "sign up successful" });
};
