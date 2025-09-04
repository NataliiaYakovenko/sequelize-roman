import * as yup from "yup";

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(30).required(),
  lastName: yup.string().trim().min(2).max(30).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
  birthday: yup
    .date()
    .required()
    .max(new Date(), "Birthdae must be current date"),
  gender: yup.string().required(),
});

export const GROUP_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().required().min(2).max(30),
  description: yup.string().trim(),
});
