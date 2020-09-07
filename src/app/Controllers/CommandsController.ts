import { Message } from 'discord.js';
import CitationController from './CitationController';

class CommandsController {
  execute(message: Message) {
    let counter = 0;

    for (let i = 0; i < message.content.length; i++) {
      if (message.content[i] === '"') {
        counter++;
      }
    }

    if (message.channel.name === 'livro-de-citações') {
      message.content.includes('!citar') && counter >= 2
        ? CitationController.save(message)
        : console.log('errou');
    }
  }
}

export default new CommandsController();
