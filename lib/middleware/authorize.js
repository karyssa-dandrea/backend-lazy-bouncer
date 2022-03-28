module.exports = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.email !== 'admin') {
      throw new Error();
    }

    next();
  } catch (error) {
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }
  // TODO: Check req.user to ensure the user's email is 'admin'
};
