const express=require('express');
const ejs=require('ejs');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const alert=require('alert');
const md5=require('md5');
const encrypt=require('mongoose-encryption');

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/projectDB");

const userSchema=new mongoose.Schema({
  email:String,
  password:String,
  username:String
});
// userSchema.plugin(encrypt,{secret:secret, encryptedFields:['password']});
const User=new mongoose.model("User",userSchema);
// let bar=document.getElementById('bar');
// let login=document.getElementById('login');
// let signUp=document.getElementById('signUp');
// let signUp2=document.getElementById('signUp2');
// let login2=document.getElementById('login2');
// let loginBox=document.getElementById('loginBox');
// let signUpBox=document.getElementById('signUpBox');
//
// signUp.addEventListener('click',()=>{
//     bar.style.left='57%';
//     loginBox.style.left='-60%';
//     signUpBox.style.left='50%';
// })
//
// signUp2.addEventListener('click',()=>{
//     bar.style.left='57%';
//     loginBox.style.left='-60%';
//     signUpBox.style.left='50%';
// })
//
// login.addEventListener('click',()=>{
//     bar.style.left='8%';
//     loginBox.style.left='50%';
//     signUpBox.style.left='-60%';
// })
//
// login2.addEventListener('click',()=>{
//     bar.style.left='8%';
//     loginBox.style.left='50%';
//     signUpBox.style.left='-60%';
// })
app.get("/",function(req,res){
  res.render("landing2");
})
app.get("/signup",function(req,res){
  res.render('signup');
})
app.post("/signup",function(req,res){
  const newUser=new User({
    email:req.body.email,
    password:md5(req.body.password),
    username:req.body.username
  });
  newUser.save(function(err){
    if(!err){
      res.render('login');
    }else{
      res.render('landing2');
    }
  })
})
app.get("/login",function(req,res){
  res.render('login');
})
// app.get("/about",function(req,res){
//   res.render("about");
// })
app.post("/login",function(req,res){
  const userName=req.body.email;
  const password=md5(req.body.password);
  User.findOne({email:userName},function(err,foundUser){
    if(!err){
      if(foundUser){
        if(foundUser.password===password){
          res.render('addfile');
        }else{
          alert("Wrong UserName or Password")
          res.render('landing2');
        }
      }else{
        alert("Wrong UserName or Password");
        res.render('landing2')
      }
    }
  })
})
app.get("/landing2",function(req,res){
  res.render('landing2');
})
app.listen(3000,function(){
  console.log("Server is Running");
})
