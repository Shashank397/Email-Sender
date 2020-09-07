var nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require('body-parser'); 
const cors = require("cors");

const app = express();
app.use(cors({origin: "http://localhost:3000"}));
app.use(bodyParser.json());

var transport = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth:{
        user:"your email address",
        pass:"your password"
    }
});

app.post("/mywebsite", function(req, res){
    var data = req.body;
    console.log(data);
    mailsender(data.email, data.emailSubject, data.message);
    res.send("got the data");
})

mailsender = function(email, subject, message){
    var mailOption = {
        from: 'ssoni397@gmail.com',
        to: email,
        subject: subject,
        text: message
    }
    transport.sendMail(mailOption, function(error, info){
        if(error)
        {
            console.warn(error);
        }
        else{
            console.warn("email has been sent : ", info.response )
        }
    
    })
}

app.listen(9000, function(req, res){
    console.log("server is running");
})
