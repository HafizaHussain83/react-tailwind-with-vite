const express = require('express');
const cors = require('cors');
const authController = require('./authController');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Auth routes
app.post('/auth/signup', authController.signup);
app.post('/auth/login', authController.login);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});