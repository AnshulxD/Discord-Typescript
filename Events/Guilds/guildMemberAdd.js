const { EmbedBuilder } = require("@discordjs/builders");
const {GuildMember} = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  /**
   * @param {GuildMember} member
   */
  execute(member) {
    const {user, guild} = member;
    const memberLogs = member.guild.channels.cache.get('1083007368427753504');
    const welcomeMessage = `Welcome <@${member.id}> to SedBots! Let's make some stuff together!`;
    
    const welcomeEmbed = new EmbedBuilder()
    .setTitle('**New member**')
    .setColor(0x4ea3f7)
    .setDescription(welcomeMessage)
    .addFields(
      { name:'Total member count:', value: `${guild.memberCount}` }
    )
    .setThumbnail('https://media.tenor.com/T2tQDqYOTHMAAAAC/dance-cat.gif')
    .setTimestamp();

    member.roles.add('1116787509419053057');
    memberLogs.send({embeds: [welcomeEmbed]});
    console.log(`${member.id} joined the guild.`)
  },
};
