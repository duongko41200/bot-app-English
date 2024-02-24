require('./Bot/bot');
const app = require('./src/app');
const PORT = process.env.PORT || 3055;
const { setupBot } = require('./Bot/bot');

const bot = setupBot();
const server = app.listen(PORT, () => {
	console.log(`WSV eCommerce started ${PORT} `);
	

});

process.on('SIGINT', () => {
	server.close((err) => {
		console.log('Exit Server Express');

	});
});
