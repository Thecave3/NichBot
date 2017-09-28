'use strict';

const config = require('./config');
const TeleBot = require('telebot');
const bot = new TeleBot(config.TOKEN_API); // Here goes your TOKEN_API

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Oh bella merdaccia!'));

bot.on(['/redbull'], (msg) => msg.reply.text('Aaah gustosaaa!'));

bot.on(['/spacco'], (msg) => msg.reply.text('SHHPACCO TUTTOOO!'));

bot.on(['/linux'], (msg) => msg.reply.text('MMM Linux come sei gustoso!'));

bot.on(['/lacava'], (msg) => msg.reply.text('MMM Meglio ucciderlo!'));

bot.on('photo', (msg) => msg.reply.text('Mi spiace mi interessano solo foto di tua madre'));

//bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();
