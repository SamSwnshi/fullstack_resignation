import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Access Denied! No Token Provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Ensure this sets req.user correctly
    console.log("Decoded user:", decoded); // Log to verify decoded user
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};



export const isAdmin = (req,res,next)=>{
    if(req.user.role === "admin"){
        next()
    }else{
        res.status(403).json({ message: 'Access denied' });
    }
}