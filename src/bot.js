require("dotenv/config");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot começou CARALHO");
    client.user.setActivity("Fazendo o Curso");
});
client.on("message", async (message) => {
    var start = false;
    var finished = false;
    var citacao = "";
    const autores = [];
    var counter = 0;
    for (let i = 0; i < message.content.length; i++) {
        if (message.content[i] == '"') {
            counter++;
        }
    }
    if (message.channel.name == "livro-de-citações" && message.content.includes("!citar") && counter >= 2) {
        for (let i = 0; i < message.content.length; i++) {
            const e = message.content[i];
            if (e == '"' && !start) {
                start = true;
                continue;
            }
            if (start) {
                if (e != '"') {
                    citacao += e
                }
                else {
                    start = false;
                    finished = true;
                    continue;
                }
            }
            if (citacao != " " && finished) {
                var subArray = "";
                for (let j = i; j < message.content.length; j++) {
                    subArray += message.content[j];
                }
                const u = subArray.split(",");
                autores.push(...u);
                break;
            }
        }
        const citacaoObj = {
            citacao,
            autores
        }
    }
});
client.login(process.env.DISCORD_TOKEN);
