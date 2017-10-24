var alex = require('alex');
var Discord = require('discord.js');

module.exports = {
	name: 'alex',
    type: 'fun',
	usage: 'alex',
	permission: 1,
	help: 'Analyzes your writing with the Alex API.',
	main: function(bot, msg) {
        var errors = alex(msg.content).messages

        if(errors.length == 0)
            bot.send(msg.channel, "Yay! The Alex API found no errors in your code!")
        else {
            var err = new Discord.RichEmbed()
            .setTitle("Alex API Writing Analysis")
            .setColor("#ffb200")
            .setFooter(bot.user.username, bot.user.avatarURL)

            for(var i = 0; i < errors.length; i++) {
                err.addField(`Error in line ${errors[i].line} character ${errors[i].column} (Reason: ${errors[i].ruleId})`, errors[i].reason)
            }
            msg.channel.send({embed:err});
        }
	}
};