export interface Movie {
    movieId:      string;
    title:        string;
    description:  string;
    rating:       number;
    duration:     string;
    genre:        string[];
    releasedDate: ReleasedDate;
    trailerLink:  string;
    imageUrl?:    string;
}

export interface ReleasedDate {
    day:   number;
    month: string;
    year:  number;
}
