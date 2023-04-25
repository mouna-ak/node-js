var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akeblimouna@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'akeblimouna@gmail.com',
  to: 'oussama-ezz@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});