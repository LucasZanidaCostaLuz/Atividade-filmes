class MovieList {
    constructor(){
        this.movies = []
    }
    addMovie(movie){
        this.movies.push(movie);
    }
    getAllMovies(){
        return this.movies;
    }
    getMovieById(id){
        const movie = this.movies.find(movie => movie.id == id);
        if(!movie){
            throw new Error("Filme não encontrado");
        }
        return movie;
    }
    getMovieByTitle(title){
        const movie = this.movies.find(movie => movie.title == title);
        if(!movie){
            throw new Error("filme não encontrado");
        }
        return movie;
    }
    updateMovie(id, updateData){
        const movie = this.getMovieById(id);
        Object.assign(movie, updateData);
        return movie;
    }

    deleteMovie(id){
        this.movies = this.movies.filter(movie => movie.id != id);
        return this.movies;
    }
}

module.exports = MovieList;