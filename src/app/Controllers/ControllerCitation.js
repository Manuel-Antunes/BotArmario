const { default: Citation } = require("../Schemas/Citation");

class CitationController {
  async index() {
    return await Citation.find();
  }
  
  async save({citation, user, date}) {
    Citation.create({
      citation,
      user,
      date,
    });
  }
}

export default new CitationController();
