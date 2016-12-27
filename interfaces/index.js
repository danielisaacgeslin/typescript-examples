/* models */
var Actor = (function () {
    function Actor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    return Actor;
}());
var Movie = (function () {
    function Movie(id, title, cast) {
        if (cast === void 0) { cast = []; }
        this.id = id;
        this.title = title;
        this.cast = cast;
    }
    Movie.prototype.rate = function (stars) {
        return true;
    };
    Movie.prototype.postComment = function (comment) {
        return 1;
    };
    return Movie;
}());
/* implementation */
var bruce = new Actor(1, 'Bruce Willis');
var joseph = new Actor(2, 'Joseph Gordon-Levitt', 'jeseph.jpg');
var looper = new Movie(1, 'Looper', [bruce, joseph]);
var armageddon = new Movie('abc', 'Armageddon', [bruce]);
var rateResult = looper.rate(5);
var commentId = looper.postComment('grate movie');
//const instance: MovieService = new MovieService();
//instance.save('Matrix',5); 
//# sourceMappingURL=index.js.map