const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("539481183579406337")
setInterval(function() {
channel.send(`spin around brother`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
