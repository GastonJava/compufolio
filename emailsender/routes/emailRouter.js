var express = require('express');
var bodypParser = require('body-parser');
var cors = require('./../cors');
const emailRouter = express.Router();
var nodemailer = require('nodemailer');
emailRouter.route('/')
.options(cors.cors, (req, res) => {
    console.log("mail llegando aqui");
    res.sendStatus(200);
})
.post(cors.cors, (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'developerrito@gmail.com',
            pass: 'Perritojimenez1'
        }
    });

    var mailOptions = {
        from: 'developerrito@gmail.com',
        to: req.body.emailRouter,
        subject: 'node mailing Testing',
        html: 'Node Mail Testing Sucessful'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
            res.send('error');
        }else{
            console.log('Email enviado: ' + info.response);
            res.send('Enviado correctamente');
        }
    });
});

module.exports = emailRouter;