var express = require('express');
var swig = require('swig');
var nodemailer = require('nodemailer');
var path = require('path');
var bodyParser   = require('body-parser');
app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', swig.renderFile);
app.set('views', __dirname+'/views');
app.set('view engine', 'html');

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/mailer', function(req, res, next) {

	var transporter = nodemailer.createTransport({
		service : 'Gmail',
		auth : {
			user: 'h.elmenyry@gmail.com',
			pass: '100%elmenyry'
		}
	});

	var mailOptions = {
		from    : req.body.mail,
		to      : 'hamza.elmenyry.wbc@gmail.com',
		subject : req.body.subject,
		text    : req.body.message,
		attachments: [
			{
	        filename: req.body.file,
					filePath : req.body.file
	    }
		]
	}

	transporter.sendMail(mailOptions, function(erreur, infos) {
		if (erreur) {
			res.send('errrreur', erreur);
		} else {
			res.send('goooooooooood');
      res.redirect('/');
		}
	});

});

app.listen(3000);
console.log('app is running thanks for your watching');
