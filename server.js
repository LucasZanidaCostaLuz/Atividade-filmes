const express = require("express");

const cors = require("cors");

const movieRoutes = require("./src/routes/movieRoutes");

const app = express();

const PORT = 4000;

app.use(cors());

app.use(express.json());

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
    res.send("eu amo ds");
});

app.listen(PORT, () => {
    console.log(`Servidor rondando na porta ${PORT}`);
});