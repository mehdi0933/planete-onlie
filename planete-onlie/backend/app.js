const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");

const userRoutes = require("./routes/user");
const tacheRoutes = require("./routes/tache");
// pour les variable d'environnement
require("dotenv").config();
const app = express();
//base de donnee mangodb

mongoose
  .connect(process.env.BDD_MANGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
//cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// parse les informations en json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// sécuriser applications
app.use(helmet());

app.use("/api/auth", userRoutes);
app.use("/api/tache", tacheRoutes);
module.exports = app;
