const express = require("express");
const router = express.Router();

const tacheCtrl = require("../controllers/tache");

// creer tache
router.post("/donnerTache", tacheCtrl.donnerTache);
//designe employés
// router.post("/donnerEmploye", tacheCtrl.donnerEmploye);

// afficher tache
router.get("/voireTache", tacheCtrl.voireTache);
// enregistrer tache
router.post("/donnerTache", tacheCtrl.donnerTache);

// supprime
router.delete("/supprirmeTache", tacheCtrl.supprimerTache);

module.exports = router;
