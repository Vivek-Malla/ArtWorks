const express = require("express");
const nodemailer = require('nodemailer');
const app = express();

const bp = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(express.static("public"));
app.use(urlencoded({
    extended : true
}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/index.html",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/login.html",function(req,res){
    res.sendFile(__dirname+"/login.html");
});
app.get("/login",function(req,res){
    res.sendFile(__dirname+"/login.html");
});
app.get("/shop.html",function(req,res){
    res.sendFile(__dirname+"/shop.html");
});
app.get("/Checkout.html",function(req,res){
    res.sendFile(__dirname+"/Checkout.html");
})
// app.post("/login",function(req,res){
//     res.sendFile(__dirname+"/login.html");
// });
app.get("/cart.html",function(req,res){
    res.sendFile(__dirname+"/cart.html");
});

app.post("/access",function(req,res){
   var name = req.body.fname;
   var email = req.body.email;
   var password = req.body.pwd;

   if(name == "Rishi" && email == "rishi@gmail.com" && password == "Rishi"){
    res.sendFile(__dirname+"/shop.html");
   }
   else{
    res.send("<h1>fail</h1>");
   }
});

app.post("/sent", async(req,res)=>{
    
    var addq = req.body.subs;
    var emailq = req.body.emails;

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    service: 'gmail',
    auth: {
      user: 'vivekmalla123@gmail.com',
      pass: 'nztvmttogtgpjvno'
    }
  })
  let info = transporter.sendMail({
    from: 'vivekmalla123@gmail.com',
    to: emailq,
    subject: 'Order Placed',
    text: addq
  })

    res.sendFile(__dirname+"/support.html");


});
  
app.listen(4900,function(){
    console.log("server running");
});