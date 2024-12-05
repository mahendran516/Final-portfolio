const express = require('express');
const bodyParser = require('body-parser');
const contactRoute = require('./contact');
const cors = require("cors")

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use('/api', contactRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
