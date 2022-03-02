const mongoMask = require("mongo-mask");
const Utilisateur = require(".. /modeles/Utilisateur");

const map = { email: "_email" };

app.get("/item", (req, res, next) => {
  const fields = req.query.fields ? mongoMask(req.query.fields, { map }) : null;
  mongoCollection.findOne({}, fields, (err, doc) => {
    if (err) return next(err);
    doc.email = doc._email;
    delete doc._email;
    res.json(doc);
  });
});
