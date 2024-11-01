const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});
require("dotenv").config();

client.once("ready", () => {
  console.log(`Đăng nhập thành công với tên ${client.user.tag}`);
});

client.on("guildMemberAdd", (member) => {
  const welcomeChannel = member.guild.channels.cache.get(process.env.channelId);
  console.log(`ID của thành viên mới: ${member.id}`); // Log ID của thành viên mới vào console
  if (welcomeChannel) {
    welcomeChannel.send(
      `Chào mừng ${member} đến với server! Chúc bạn vui vẻ! 🎉`
    );
  }
});

client.login(process.env.DISCORD_TOKEN);
