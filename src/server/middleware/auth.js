const jwt = require("jsonwebtoken");
const jwtToken = require("../jwtToken/jwt.json");

module.exports = function(req, res, next) {
  // Get token from the header
  //when we send request to a protected route send the token the header
  const token = req.header("x-auth-token");

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorisation denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, jwtToken.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};