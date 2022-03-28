module.exports = async (req, res, next) => {
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('You do not have access to this');

    next();
  } catch (error) {
    error.status = 403;
    next(error);
  }
  // TODO: Check req.user to ensure the user's email is 'admin'
};
