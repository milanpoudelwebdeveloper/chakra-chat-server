const { loginSchema } = require("../schemas/loginSchema");

exports.validateForm = (req, res) => {
  loginSchema
    .validate(req.body)
    .then((valid) => {
      if (valid) {
        res.status(200).json({ message: "login successful" });
        console.log("the form looks good");
      }
    })
    .catch((err) => {
      res.status(422).json({ message: err.errors[0] });
      console.log(err.errors);
    });
};
