const ErrorMiddleware = (error, req, res, next) => {
  console.log(error);
  if (error.status) return res.status(error.status).json({ message: error.message });
  res.status(500).json({ message: 'Sorry, something went wrong!' });
  next();
};

module.exports = ErrorMiddleware;
