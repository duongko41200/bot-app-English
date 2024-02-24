'use strict';

const mongoose = require('mongoose');
const { db: { host, port, name } } = require('../configs/config.mongodb')


let connectString =''

if (process.env.NODE_ENV === 'dev') {
	connectString = `mongodb://${host}:${port}/${name}`;
} else {
	connectString = process.env.MONGO_URL_PRO;
}



console.log(connectString)
const {countConnect} = require("../helpers/check.connect")

class Database {
	constructor() {
		this.connect();
	}

	//connect
	connect(type = 'mongodb') {
		if (1 === 1) {
			mongoose.set('debug', true);
			mongoose.set('debug', { color: true });
		}

		mongoose
			.connect(connectString, {
				maxPoolSize:50
			})
			.then((_) => {


				console.log('connect Mongodb Sucessfully',countConnect());
			})
			.catch((err) => console.log('Error Connect', err));
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
