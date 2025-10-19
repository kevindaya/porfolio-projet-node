const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

let projets = [
  {
    id: 1,
    titre: "Application de Films et Séries",
    description: "Regarder les dernières tendances",
    techno: "Node.js, Express, Embeebed Javascript (EJS)",
  },
  {
    id: 2,
    titre: "Calculatrice simple",
    description: "Additionner, Soustraire, multiplier, diviser",
    techno: "Javascript",
  },
  {
    id: 3,
    titre: "CRUD basique",
    description: "Créer, lire, mettre à jour, supprimer",
    techno: "Node.js, Express",
  },
];

//Configurer EJS
app.use(express.static("public"));
app.set("view engine", "ejs");

//Definition des vues
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("index", { pageTitle: "Accueil" });
});

app.get("/projets", (req, res) => {
  res.render("projets", { pageTitle: "Mes Projets", projets });
});
app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "À Propos",
    nom: "Ndaya Heukane Kevin Gaetan",
    email: "ndayakevin2007@gmail.com",
    github: "https://github.com/kevindaya",
    ville: "Douala",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: "Contact",
    nom: "Ndaya Heukane Kevin Gaetan",
    email: "ndayakevin2007@gmail.com",
    github: "https://github.com/kevindaya",
    ville: "Douala",
  });
});
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Erreur 404" });
});
// Ecouter le PORT 3000

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
