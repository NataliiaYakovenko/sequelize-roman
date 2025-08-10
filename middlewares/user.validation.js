const {USER_SCHEMA} = require('../schemas/user.schema')




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
