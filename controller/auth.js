const { loginSchema } = require("../schemas/loginSchema");

exports.loginUser = async (req, res) => {
  const formData = req.body;
  loginSchema
    .validate(formData)
    .then((valid) => {
      if (valid) {
        console.log("the form looks good");
      }
    })
    .catch((err) => console.log(err.errors));
  res.status(200).json({ message: "login successful" });
};
