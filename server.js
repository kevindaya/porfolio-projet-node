const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

//Configurer EJS
app.use(express.static("public"));
app.set("view engine", "ejs");

//Definition des vues
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("index", { title: "Accueil" });
});
app.get("/projets");

// Ecouter le PORT 3000

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
