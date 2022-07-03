const ErrorHandler = (status, message) => {
  const error = {
    status,
    message,
  };
  return error;
};

module.exports = {
  ErrorHandler,
};
