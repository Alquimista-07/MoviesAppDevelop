export interface Movie {
    id:           string;
    title:        string;
    description:  string;
    rating:       number;
    duration:     string;
    genre:        string[];
    releasedDate: ReleasedDate;
    trailerLink:  string;
    imageUrl?:    string;
    isFavorite:   boolean;
}

export interface ReleasedDate {
    day:   number;
    month: string;
    year:  number;
}
