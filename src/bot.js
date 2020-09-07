require("dotenv/config");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot começou CARALHO");
    client.user.setActivity("Fazendo o Curso");
});
client.on("message", async (message) => {
    if (message.content == "a") {
        
    }
});
client.login(process.env.DISCORD_TOKEN);
