const mongoose = require('mongoose');

const requestFileSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    receiver: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const requestFile = mongoose.model('requestFile', requestFileSchema);

module.exports = requestFile;
