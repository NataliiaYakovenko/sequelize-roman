const MAX_LIMIT = 5;

module.exports = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;

    //якщо не має ні limit ні offset
    if (!limit && !offset) {
      req.pagination = {
        //відправляємо 1 сторінку
        limit: 5,
        offset: 0,
      };
    } else {
      req.pagination = {
        limit: limit > MAX_LIMIT || limit <= 0 ? MAX_LIMIT : limit,
        offset: offset < 0 ? 0 : offset,
      };
    }
    next()
  } catch (error) {
    next(error);
  }
};
