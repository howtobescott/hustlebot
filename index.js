/*
 * @file index.js
 * @author Scott Chu
 * @date 2020-06-12
 */

const Discord = require('discord.js');
const Express = require('express');
const {spawn} = require('child_process');
const app = Express();
const port = 42806;
const bot = new Discord.Client();
const token = 'NzIxMTk5NDY2MzE2NTYyNDQy.XuRFvw.rZEFuz1UsOx5HWLQfIvaoICTq0c';
const PREFIX = "#";

function generateQuote() {
        app.get('/', (req, res) => {
                var quote;
                const python = spawn('python', ['scrape.py']);

                python.stdout.on('data', function (data) {
                        console.log('Retrieving quote from python script....');
                        quote = data.toString();
                });

                python.on('close', (code) => {
                        console.log('Closing');
                        res.send(quote);
                });
        })
}

bot.on('ready', () => {
        console.log('Bot Online!');
})

bot.on('message', message => {
        let args = message.content.substring(PREFIX.length).split(" ");
        
        if (message.content === "what time is it?") {
                message.reply("Grind O'Clock");
        }

        switch (args[0]) {
                case 'hustle':
                        message.channel.send('')
                break;        
        }    
})

bot.login(token);
