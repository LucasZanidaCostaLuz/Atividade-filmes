const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

lista.addMovie(new Movie('Corações de Ferro', 'David Ayer', '05/02/2015', '2H14Min', 7.6));

const router = {
    addMovie: (req, res) => {
        try {
            const {title, author, releaseDate, duration, IMDbRating} = req.body;
            if(!title || !author || !releaseDate || !duration || !IMDbRating){
                throw new Error("Insira todas as informações necessárias");
            }
            const movie = new Movie(title, author, releaseDate, duration, IMDbRating);
            lista.addMovie(movie);
            res.status(200).json({message: "filme criado com sucesso"});
        } catch (error) {
            res.status(404).json({message: "erro ao criar filme", error});
        }
    },
    getAllMovies: (req, res) =>{
        try {
            res.status(200).json(lista.getAllMovies());
        } catch (error) {
            res.status(404).json({message: "erro ao procurar filmes", error});
        }
    },
    getMovieById: (req, res) =>{
        try {
            res.status(200).json(lista.getMovieById(req.params.id));
        } catch (error) {
            res.status(404).json({message: "erro ao procurar esse filme"});
        }
    },
    updateMovie: (req, res) =>{
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({message: "erro ao atualizar esse filme"});
        }
    },
    deleteMovie: (req, res) =>{
        try {
            res.status(200).json(lista.deleteMovie(req.params.id),{message: "filme deletado com sucesso"});
        } catch (error) {
            res.status(404).json({message: "erro ao deletar esse filme"});
        }
    }
};

module.exports = router