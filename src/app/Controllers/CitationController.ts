import { Message } from 'discord.js';
import Citation from '../Schemas/Citation';

class CitationController {
  async index() {
    return Citation.find();
  }

  async save(message: Message) {
    let start = false;
    let finished = false;
    let citation = '';
    const authors = [];

    for (let i = 0; i < message.content.length; i++) {
      const e = message.content[i];
      if (e === '"' && !start) {
        start = true;
        continue;
      }
      if (start) {
        if (e !== '"') {
          citation += e;
        } else {
          start = false;
          finished = true;
          continue;
        }
      }
      if (citation !== ' ' && finished) {
        let subArray = '';
        for (let j = i; j < message.content.length; j++) {
          subArray += message.content[j];
        }
        const u = subArray.split(',');
        authors.push(...u);
        break;
      }
    }

    Citation.create({
      citation,
      authors,
      date: new Date(),
    });
  }
}

export default new CitationController();
