const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!merch') {
    msg.reply('merch:https://www.gamersimen.no/');
  }
});
client.on('message', msg => {
    if (msg.content === '!youtube') {
      msg.reply('youtube:https://www.youtube.com/channel/UCCOodT4NxazoavF33fZMB9Q');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!twitch') {
      msg.reply('twitch:https://www.twitch.tv/gamersimen');
    }
});
client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('!twitch    så finder du twitch min  |  !merch    for å finne lik til merch  | !youtube    for å få link til youtuben min');
  }
});

client.login(Process.env.token);