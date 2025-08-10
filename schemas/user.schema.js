const yup = require("yup");


const USER_SCHEMA = yup.object({
  firstName: yup.string().required().min(1),
  lastName: yup.string().required().min(1),
  email: yup.string().required().email("Invalid email"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
      "Пароль має бути мінімум 8 символів, містити велику та малу літеру, цифру і спецсимвол"
    ),
  birthday: yup.date(),
  gender: yup.string(),
});

module.exports = USER_SCHEMA