const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("496396584137785355")
setInterval(function() {
channel.send(`$play`);
}, 30)
})

client.login(process.env.NTM3MTc3OTg4NDA0NDc3OTUy.DyhfUw.iud49sPNmLRtJK-wcHUGH86WmA8);
