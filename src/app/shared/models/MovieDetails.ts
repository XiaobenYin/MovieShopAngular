import { Genre } from "./Genre";
import { Trailer } from "./Trailer";

export interface MovieDetails {

    id:             number;
    title:          string;
    posterUrl:      string;
    backdropUrl:    string;
    rating:         any;
    overview:       string;
    tagline:        string;
    budget:         number;
    revenue:        number;
    imdbUrl:        string;
    tmdbUrl:        string;
    releaseDate:    string;
    runTime:        number;
    price:          number;
    favoritesCount: number;
    casts:          Cast[];
    genres:         Genre[];
    reviews:        any[];
    trailers:       Trailer[];
}

export interface Cast {
    id:          number;
    name:        string;
    gender:      string;
    tmdbUrl:     string;
    profilePath: string;
    character:   string;
}



