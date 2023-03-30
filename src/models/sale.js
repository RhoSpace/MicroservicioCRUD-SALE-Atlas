const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true
  },
  saleAmount: {
    type: Number,
    required: true
  },
  seller: {
    type: String,
    required: true
  }
},{versionKey: false});

module.exports = mongoose.model('Sale', saleSchema);