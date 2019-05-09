const https = require('https');
const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const app = express();
var request = require('request');


app.post("/submit", urlencodedParser, function (request, response) {
  console.log(request.body.name);
    if(!request.body) return response.sendStatus(400);
    let mailOptions = {
      from: 'sorokina.eln@gmail.com',
      to: request.body.email,
      subject: `Email from Daisy`,
      text: `Hello ${request.body.name}! Your form is accepted!`
    };    
    transporter.sendMail(mailOptions, function(error, response){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + response.statusCode);
      }
    });
    response.send(`Email is sent! Check ${request.body.email} email-box`);
});


app.use(express.static('public'))

app.listen(8080);

console.log('Сервер стартовал!');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sorokina.eln@gmail.com',
    pass: 'lenhen1991'
  }
});





