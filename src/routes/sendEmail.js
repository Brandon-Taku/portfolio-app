const express = require('express');
const app = express();
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const sendEmail = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

sendEmail.post('', (req, res) => {

    let transporter = nodeMailer.createTransport({
       host: 'smtp.gmail.com',
       port: 465,
       secure: true,
       auth: {
            user: 'brendonnyakudya@gmail.com',
            pass: 'boksburg'
       }
    });
 
    let mailOptions = {
       from: req.body.email,
       to: 'brendonnyakudya@gmail.com', // receiver Email
       subject: req.body.email, // Subject line
       body: req.body.body, // plain text body
       html: req.body.body // html bodys

       
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
           return console.log(error);
       } 
       else{
        
         console.log("Message send Successfully");
         res.render('return');
         
       }
      
    });
  });

  module.exports = sendEmail;

