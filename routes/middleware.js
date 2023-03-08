const jwt = require('jsonwebtoken');

module.exports=function(req,res,next){
    try{
    
  let token=req.header('x-token');
  if(!token){
    return res.status(400).json({ message: 'no token' });
  }
  let decode=jwt.verify(token,'jwtpassword');
  req.user=decode.user;
  next();



    }catch(e){
        console.log(e);
        return res.status(400).json({ message: 'auth error' });
    }
}