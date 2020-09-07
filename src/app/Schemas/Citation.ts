import mongoose from 'mongoose';

const CitationSchema = new mongoose.Schema({
  citation: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Citation', CitationSchema);
