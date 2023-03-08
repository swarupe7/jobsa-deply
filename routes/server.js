

const dotenv =require('dotenv');
const express = require("express");
const mongoose = require("mongoose");

const devuser=require('./devusermodel.js');
const jwt=require('jsonwebtoken');
const cors = require('cors');
const middleware=require('./middleware.js')
const app = express();
const review=require('./reviewmodel.js');
const reviewmodel = require("./reviewmodel.js");
app.use(cors({origin:'*'}))
app.use(express.json());
dotenv.config();


const db="mongodb+srv://beginner:beginner@cluster0.dcepzc6.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => console.log("💻 Mondodb Connected"));

app.get("/", (req, res) => {
   res.send("Server working 🔥");
});



//registering users
app.post("/register", async (req, res) => {
    try{
        const {fullname,email,mobile,skill,password,confirmpassword}=req.body;
        const exist=await devuser.findOne({email});
        if(exist){
            return res.status(400).json({ message: 'exists user' });
        }
        if(password!=confirmpassword){
            return res.status(400).json({ message: 'passcode not match' });
        }
        let newUser=new devuser({fullname,email,mobile,skill,password,confirmpassword});
        newUser.save();
        
        return res.json({ message: 'user registered successfully' });


    }catch(e){
        console.log(e);
        return res.status(400).json({ message:`${e}`});
    }
  
});


//login users

app.post("/login",async (req, res) => {
  try{
      const {email,password}=req.body;
      const exist=await devuser.findOne({email});
      if(!exist){
        return res.status(400).json({ message: 'user not exist' });
      }
      if(exist.password !=password){
        
        return res.status(400).json({ message: 'password wrong !!' });
      }

      let payload={
        user:{
            id:exist.id
        }
      }
      jwt.sign(payload,'jwtpassword',{expiresIn:360000000},(err,token)=>{
        if(err)throw err;
        return res.json({token});
      })


  }catch(e){
    console.log(e);
    return res.status(400).json({ message: 'login error' });
  }
});

//whole profiles seeing

app.get("/allprofiles",middleware, async (req, res) => {
   try{
   let allprofiles=await devuser.find();
   return res.json(allprofiles);
}   
    catch(e){
        console.log(e);
        return res.status(400).json({ message: 'login error' });
    }
});

//my-profile 

app.get("/myprofile",middleware,async (req, res) => {
    try{
       let user=await devuser.findById(req.user.id);
       return res.json(user);
}catch(e){
        console.log(e);
        return res.status(400).json({ message: 'login error' });
} 
});

//review adding 
app.post("/addreview",middleware, async (req, res) => {
  try{
      const {taskworker,rating}=req.body;
      const exist=await devuser.findById(req.user.id);
      const newReview=new review({
        taskprovider:exist.fullname,
        taskworker,rating
      });
      newReview.save();
      return res.json({newReview});

  }catch(e){
    console.log(e);
    return res.status(400).json({ message: 'review error' });

  }
});

//see all reviews

app.get("/myreview",middleware,async (req, res) => {
    try{
       let allreview=await review.find();
       let myreview=allreview.filter(review=>review.taskworker.toString()===req.user.id.toString());
        return res.json({myreview});

    }catch(e){
        console.log(e);
    return res.status(400).json({ message: 'review error' });
    }
  
});











// if(process.env.NODE_ENV=='production'){
//    const path=require('path');
//    app.get('/',(req,res)=>{
//     app.use(express.static(path.resolve(__dirname,'tut','build')))
//     res.sendFile(path.resolve(__dirname,'tut','build','index.html'));
//    })

// }








app.listen(3050, () => console.log(`Server running on port 🔥`));
