const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));

const portfolioRouter = require('./src/routes/portfolio');
const sendEmail = require('./src/routes/sendEmail');

app.use('/', portfolioRouter);
app.use('/send-email', sendEmail);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));