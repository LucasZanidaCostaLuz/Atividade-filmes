const {v4: uuidv4 } = require("uuid");

class Movie{
    constructor(title, author, releaseDate, duration, IMDbRatings){
        this.id = uuidv4(),
        this.title = title,
        this.author = author,
        this.releaseDate = releaseDate,
        this.duration = duration;
        this.IMDbRatings = IMDbRatings
    }
}

module.exports = Movie