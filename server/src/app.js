const compression = require('compression');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const TOKEN = '6893164702:AAEPdDlqfEy20Np_goXO7R-9cqAgfelPys0';
const bot = new Telegraf(TOKEN);

app.post(`/webhook/${TOKEN}`, (req, res) => {
    bot.handleUpdate(req.body, res);
});

app.use(cors());
//init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init db
require('./dbs/init.mongodb');
const { checkOverload } = require('./helpers/check.connect');
checkOverload();

// init router
app.use('/', require('./routes/index'));

//handling errors
app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use((err, req, res, next) => {
	const statusCode = err.status || 500;
	return res.status(statusCode).json({
		status: 'err',
		code: statusCode,
		stack:err.stack,
		message: err.message || 'Internal Server Error'
	});
});
module.exports = app;
