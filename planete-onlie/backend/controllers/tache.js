const Tache = require("../models/tache");

// creer tache
exports.donnerTache = (req, res, next) => {
  const tache = new Tache({
    libelle: req.body.libelle,
    employe: req.body.employe,
    heuresDeDébut: req.body.heuresDeDébut,
    heuresDeFin: req.body.heuresDeFin,
    dateDeDébut: req.body.dateDeDébut,
    dateDeFin: req.body.dateDeFin,
  });
  tache
    .save()
    .then(() => {
      res.status(201).json({
        message: "tache enregistre!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// afficher tache
exports.voireTache = (req, res, next) => {
  Tache.find()
    .then((taches) => {
      res.status(200).json(taches);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// supprimerTache
exports.supprimerTache = (req, res, next) => {
  Tache.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "supprime!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
