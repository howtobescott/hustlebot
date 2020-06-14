/*
 * @file index.js
 * @author Scott Chu
 * @date 2020-06-12
 */

 //Discord configs
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const PREFIX = "#";

//Server configs
const spawn = require('child_process').spawn;
const python = spawn('python', ['scrape.py']);

python.stdout.on('data', data => {
        console.log(data.toString());
});

bot.on('ready', () => {
        console.log('Bot Online!'); 
});

bot.on('message', message => {
        let args = message.content.substring(PREFIX.length).split(" ");
        
        if (message.content === "testing") {
                message.channel.send(quote);
   
        }

        switch (args[0]) {
                case 'hustle':
                        message.channel.send(quote)
                break;        
        }    
});

bot.login(token);