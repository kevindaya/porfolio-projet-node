const express = require("express");
const app = express();
const PORT = 3000;

//Configurer EJS
app.use(express.static("public"));
app.set("view engine", "ejs");

//Definition des vues

app.get("/", (req, res) => {
  res.send("Page d'accueil");
});

// Ecouter le PORT 3000

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
