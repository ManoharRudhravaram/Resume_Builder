let jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res
        .status(200)
        .send({ message: "Unauthrized User", success: false });
    }
    let decode = jwt.verify(token, process.env.ACCESS_KEY);
    req.payload = decode.aud
    if (!decode) 
      {return res.status(200).send({ message: "Unauthorized User" }) }
    else {
      next();
    }
  } catch (error) {
    if (error.name == "JsonWebTokenError") {
      next(new Error('User is Unauthourized', 401))
    }
    else {
      next(new Error(error.message, 401))
    }
  }
}

module.exports = { verifyToken }