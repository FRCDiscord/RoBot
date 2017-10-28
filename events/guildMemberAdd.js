var Discord = require('discord.js')

exports.run = (bot, member) => {
    bot.getCurrentSetting('welcomeMessagesEnabled', member.guild.id).then(res => {
        if (res == 1) {
            bot.getCurrentSetting('welcomeMessage', member.guild.id).then(text => {
                var welcome = new Discord.RichEmbed()
                    .setAuthor(member.user.username, member.user.avatarURL)
                    .setFooter(member.guild.name)
                    .setTimestamp()
                    .setColor("#00FF00")
                text.replace('{server:name}', member.guild.name)
                    .replace('{user:mention}', member.user)
                    .replace('{server:membercount}', member.guild.members.size)

                bot.getCurrentSetting('announcementChannel', member.guild.id).then(id => {
                    var channel = member.guild.channels.get(id)
                    channel.send({
                        embed: welcome
                    })
                })
            })
        }
    })
}