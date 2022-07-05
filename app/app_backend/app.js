const app = require('./index');
require('dotenv').config();

app.listen(process.env.BACKEND_PORT || 3001, () => {
  console.log(`App listening ${process.env.BACKEND_PORT || 3001}`);
});
