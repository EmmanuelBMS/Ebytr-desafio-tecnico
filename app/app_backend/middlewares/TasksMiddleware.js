const create = (req, res, next) => {
  const { task, employeeId } = req.body;

  if (!task || !employeeId) return res.status(400).json({ message: 'All fields must be filled!' });

  next();
};

const update = (req, res, next) => {
  const { status } = req.body;
  if (!status) return res.status(400).json({ message: 'Status is required' });
  const validStatus = /pendant|doing|done/;
  if (!status.match(validStatus)) {
    return res.status(400).json({ message: 'Invalid status!' });
  }
  next();
};

module.exports = {
  create,
  update,
};
