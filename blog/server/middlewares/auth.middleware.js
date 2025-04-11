
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const check = async (req, res, next) => {
  try {
    
    const authHeader = req.header("Authorization");


    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("No token provided");
      return res.status(401).json({
        message: "No token provided, authorization denied",
      });
    }

    
    const token = authHeader.split(" ")[1];
    console.log("Extracted Token:", token); // Debugging log

    
    const verified = jwt.verify(token, process.env.SECRETKEY);
    console.log("Decoded Token:", verified); // Debugging log

  
    req.user = verified.userID;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message); // Debugging log
    return res.status(401).json({
      message: "Token verification failed",
      error: error.message,
    });
  }
};

module.exports = check;