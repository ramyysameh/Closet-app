const outfitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },

  garments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garment'
  }],

  occasion: String,
  createdAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Outfit', outfitSchema);