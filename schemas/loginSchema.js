const yup = require("yup");

exports.loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username can't be more than 20 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password can't be more than 20 characters")
    .required("Password is required"),
});
