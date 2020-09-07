require("dotenv/config");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot começou CARALHO");
    client.user.setActivity("Fazendo o Curso");
});

client.on("message", (message) => {

    message.channel.name === "livro-de-citações" ? console.log("foi") : console.log("não foi")
});

client.login(process.env.DISCORD_TOKEN);
console.log(process.env.DISCORD_TOKEN);