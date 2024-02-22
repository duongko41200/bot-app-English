const { Telegraf } = require('telegraf');
const axios = require('axios');
const TOKEN = '6893164702:AAEPdDlqfEy20Np_goXO7R-9cqAgfelPys0';
const bot = new Telegraf(TOKEN);
const {signUpHandle} = require('./controllerBot/access.controllerBot')

axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};




const web_link = 'https://5fd9-58-186-177-26.ngrok-free.app';

const tutorialMessage = `
	Đây là danh sách các câu lệnh
	/start - Hiên thị các danh sách sử dụng bot
	/signup - đăng ký sử dụng app
`;



// bot.use((ctx, next) => {
// 	console.log(ctx);
// 	next();
// });
bot.start((ctx) =>
	ctx.reply(`${tutorialMessage}`, {
		reply_markup: {
			keyboard: [[{ text: 'web app', web_app: { url: web_link } }]],
		},
	})
);

//access bot
signUpHandle(bot)




bot.hears('hi', (ctx) => {
	ctx.reply(`hi ${ctx.from.first_name}! how are you today?`);
});

// bot.on('text', (ctx, next) => {
// 	console.log('ctx tẽt:', ctx.update.message.text);
// 	ctx.reply('tôi đã nhận được feedback của bạn');
// 	next(ctx);
// });


bot.command('test', (ctx) => {
	ctx.telegram.sendMessage(ctx.chat.id, 'duong dep trai');
	console.log('chat id:', ctx.chat.id, ctx.from);
});

bot.command('echo', (ctx) => {
	let input = ctx.message.text;
	let inputArr = input.split(' ');
	let message = '';
	if (inputArr.length === 1) {
		message = 'không có nội dung';
	} else {
		inputArr.shift();
		console.log({ inputArr });
		message = inputArr.join(' ');
	}
	ctx.reply(message);
});

bot.launch();
