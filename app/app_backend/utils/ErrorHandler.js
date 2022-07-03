const ErrorHandler = (error, req, res, next) => {
  if (error.status) return res.status(error.status).json({ message: error.message });
  console.log(error);
  res.status(500).json({ message: 'Sorry, something went wrong!' });
  next();
};

module.exports = ErrorHandler;
