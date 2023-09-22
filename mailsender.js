var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lilolander00@gmail.com',
    pass: 'pmwb qrnw hkki awbo'
  }
});

var mailOptions = {
  from: 'lilolander00@gmail.com',
  to: 'jihedsamet6@gmail.com',
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