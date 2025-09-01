// const {USER_SCHEMA} = require('../schemas/user.schema')

// module.exports.validateUser = async (req, res, next) => {
//   try {
//     const { body } = req;

//     const validatedUser = await USER_SCHEMA.validate(body);
//     if (validatedUser) {
//       next();
//     }

//   } catch (error) {
//     next(error);
//   }
// };

const USER_SCHEMA = require('../schemas/user.schema');

module.exports.validateUser = async (req, res, next) => {
  try {
    const validatedUser = await USER_SCHEMA.validate(req.body, { abortEarly: false });
    req.body = validatedUser;
    next();
  } catch (error) {
    // yup ValidationError має поле errors
    if (error.name === "ValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    next(error); // інші помилки
  }
};