require("dotenv/config");
const Discord = require("discord.js");
const { google } = require("googleapis");
const docs = google.docs("v1");

const client = new Discord.Client();
const api = new Discord.APIMessage();

client.on("ready", () => {
    console.log("Bot começou CARALHO");
    client.user.setActivity("Fazendo o Curso");
});
client.on("message", async (message) => {
    if (message.content == "a") {
        
    }
});
client.login(process.env.DISCORD_TOKEN);
