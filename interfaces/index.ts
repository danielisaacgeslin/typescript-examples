/* interfaces */
interface IActor {
    id: number;
    name: string;
    imageUrl?: string;
}

interface IMovie {
    id: number | string;
    title: string;
    cast: IActor[];
    rate(stars: number): boolean;
    postComment(comment: string): number;
}

interface IPagination<T> {
    list: T[];
    rowCount: number;
}

/* models */
class Actor implements IActor {
    constructor(
        public id: number,
        public name: string,
        public imageUrl?: string
    ) { }
}

class Movie implements IMovie {
    constructor(
        public id: number | string,
        public title: string,
        public cast: IActor[] = []
    ) { }
    
    rate(stars: number): boolean {
        return true;
    }

    postComment(comment: string): number {
        return 1;
    }
}

/* implementation */
const bruce: IActor = new Actor(1, 'Bruce Willis');
const joseph: IActor = new Actor(2, 'Joseph Gordon-Levitt', 'jeseph.jpg');
const looper: IMovie = new Movie(1, 'Looper', [bruce, joseph]);
const armageddon: IMovie = new Movie('abc', 'Armageddon', [bruce]);
const tableData: IPagination<IMovie> = { list: [looper, armageddon], rowCount: 1 };
const rateResult: boolean = looper.rate(5);
const commentId: number = looper.postComment('grate movie');

/* documentation */


declare class MovieService{
    /**
     * Saves a new movie using POST
     * @param title string The title of the movie
     * @param rating number The rating of the movie
     */
    save(title: string, rating: number): boolean
}
//const instance: MovieService = new MovieService();
//instance.save('Matrix',5);