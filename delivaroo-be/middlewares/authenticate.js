const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const accessToken = req.header('Authorization');

  if (!accessToken) {
    return res.sendStatus(401);
  }

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

module.exports = authenticate;
