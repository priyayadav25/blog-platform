const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{
 const token=req.header("token");

 if(!token)
 return res.status(401).json("Access Denied");

 try{
  jwt.verify(token,"secretkey");
  next();
 }catch{
  res.status(400).json("Invalid Token");
 }
};
