const mongoose = require("mongoose");

const tacheSchema = mongoose.Schema({
  libelle: { type: String, required: true },
  heuresDeDébut: { type: setTimeout, required: true },
  heuresDeFin: { type: setTimeout, required: true },
  employés: { type: String, required: true },
  dateDeDébut: { type: Date, required: true },
  dateDeFin: { type: Date, required: true },
});

module.exports = mongoose.model("Tache", tacheSchema);
