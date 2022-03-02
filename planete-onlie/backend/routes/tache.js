const express = require("express");
const router = express.Router();

const tacheCtrl = require("../controllers/tache");
const auth = require("../middleware/auth");
// creer tache

// afficher tache
router.get("/voireTache", auth, tacheCtrl.voireTache);
// enregistrer tache
router.post("/donnerTache", auth, tacheCtrl.donnerTache);

// supprime
router.delete("/supprirmeTache", auth, tacheCtrl.supprimerTache);

module.exports = router;
