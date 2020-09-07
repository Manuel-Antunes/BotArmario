import 'dotenv/config';
import Discord from 'discord.js';
import './database';

import CommandsController from './app/Controllers/CommandsController';

const client = new Discord.Client();

client.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Bot começou CARALHO');
  client.user?.setActivity('Fazendo o Curso');
});

client.on('message', (message): void => CommandsController.execute(message));
client.login(process.env.DISCORD_TOKEN);
