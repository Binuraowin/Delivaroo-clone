const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const APIRouter = require("./routes/api.route");
const authenticate = require('./middlewares/authenticate');
const jwt = require('jsonwebtoken');
dotenv.config();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const refreshTokens = {};

const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
  };
  
  const generateRefreshToken = (userId) => {
    const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET);
    refreshTokens[userId] = refreshToken;
    return refreshToken;
  };
  
  app.post('/api/token', (req, res) => {
    const { refreshToken } = req.body;

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
   
  
      const accessToken = generateAccessToken(req.body.userId);
      res.json({ accessToken });
    });
  });

app.use("/api/v1", authenticate, APIRouter);

app.listen(PORT, () => {
  console.log(`service is running on port ${PORT}`)
});

module.exports = app;
