const mongoose = require('mongoose');

const CitationSchema = new mongoose.Schema(
  {
    citation: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
);

export default mongoose.model('Citation', CitationSchema);