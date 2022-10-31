const jwt = require("jsonwebtoken");
const JWT_SECRET = "GiveMe$$$s";

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  
  const token = req.header("auth-token");
  console.log(token);
  
  if (!token) {
    return res.status(401).send({ error: "Please authenticate" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = fetchuser;
