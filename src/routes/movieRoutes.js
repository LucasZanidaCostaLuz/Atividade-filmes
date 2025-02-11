const express = require("express");

const router = express.Router();

const movieControler = require("../controllers/movieController");

router.get("/movie", movieControler.getAllMovies);
router.post("/movie", movieControler.addMovie);
router.put("/movie/:id", movieControler.updateMovie);
router.delete("/movie/:id", movieControler.deleteMovie);
router.get("/movie/:id", movieControler.getMovieById);

module.exports = router;