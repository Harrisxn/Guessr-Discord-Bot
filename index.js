const Discord = require('discord.js');
const client = new Discord.Client();
var info = require('./info.json');


client.on('ready', () => {
console.log("client is ready!")
client.user.setPresence({
    status: 'online',
    activity: {
        name: 'Guessr',
        type: 'STREAMING',
        url: 'https://www.twitch.tv'
    }
})
});

client.on('message', (message) => {
    let user = message.author;
    var mes = message.content.split(" ");
    if(mes[0] == '$guess') { 
        num = Math.floor((Math.random() * 100) + 1);
        if (mes[1] > 0 && mes[1] < 101){
            if(mes[1].length < 4){
                if (mes[1] != num)
                {
                    guess = mes[1];
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#3399ff')
                        .setTitle('Guessr')
                        .setFooter('- Guessr', 'https://i.imgur.com/Gk78KEY.png')
                        .setDescription(`<@${user.id}>` + ' rolled a **'+ mes[1] + '** which was the wrong number. The pre-determined number was **'+ num + '**');
                        message.channel.send(exampleEmbed);
                }
                else {
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#3399ff')
                    .setTitle('Guessr')
                    .setDescription(`<@${user.id}>` +' rolled a **'+ mes[1] + '** and has guessed correctly! Congrats 🎉')
                    .setFooter('- Guessr', 'https://i.imgur.com/Gk78KEY.png');
                    message.channel.send(exampleEmbed);
                }
            }
        }
        else {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#3399ff')
            .setTitle('Guessr')
            .setFooter('- Guessr', 'https://i.imgur.com/Gk78KEY.png')
            .setDescription('Guess must be between 1-100');
            message.channel.send(exampleEmbed);
      
        }
    }
});

client.login(info.id);