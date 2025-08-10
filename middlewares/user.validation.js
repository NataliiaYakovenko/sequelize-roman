const yup = require("yup");
const { User } = require("../models");

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

module.exports.validateUser = async (req, res, next) => {
  try {
    const { body } = req;

    const validatedUser = await USER_SCHEMA.validate(body);
    if (validatedUser) {
      next();
    }

  } catch (error) {
    next(error);
  }
};
