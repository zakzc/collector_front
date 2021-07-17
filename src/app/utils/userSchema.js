import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is mandatory"),
  password: Yup.string()
    .min(4, "Password is too short")
    .max(70, "Password is too long")
    .required("Password is mandatory"),
});

UserSchema.validate({}).catch(function (e) {
  console.log("Another validation error on user: ", e);
});

export default UserSchema;
