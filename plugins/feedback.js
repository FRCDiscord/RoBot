const Discord = require("discord.js");

module.exports = {
	name: 'feedback',
    usage: 'feedback',
    permission: 1,
    help: 'Allows the user to provide feedback about the bot',
	main: function(bot, msg) {
		msg.reply("your feedback has been recieved!");
		var owner = bot.users.get('171319044715053057');
		var f = new Discord.RichEmbed();
		f.setColor(0x1675DB)
			.setAuthor(msg.author.username, msg.author.avatarURL)
			.addField('Feedback Recieved', msg.content)
			.setFooter(`RoBot 4.20`, `${bot.user.avatarURL}`)
			.setTimestamp()
		owner.sendEmbed(f);
	}
};
