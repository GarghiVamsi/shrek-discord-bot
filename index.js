const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('Shrek is ready to be green!');
})

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    if (!message.content.startsWith(PREFIX)) return;
    if (message.author.bot) return;
    


    switch(args[0]){
        case 'shrek':
            number = 1081;
            imageNumber = Math.floor(Math.random() * (number - 1 + 1)) +1;
            message.channel.send({files: ["./images/" + imageNumber + ".png"]})
        break;
    }

})

bot.login('yourLoginToken');
