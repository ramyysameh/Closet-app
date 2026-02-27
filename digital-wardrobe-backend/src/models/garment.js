const garmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },

  name: String,
  category: { type: String, index: true },  // shirt, pants, etc
  color: { type: String, index: true },
  season: [String],

  imageUrl: String,
  cost: Number,
  timesWorn: { type: Number, default: 0 }

}, { timestamps: true });

module.exports = mongoose.model('Garment', garmentSchema);