import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { GenresContext } from "./GenresContext";

interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface MoviesContextData {
    movies: Movie[]
}

interface MoviesProviderProps {
    children: ReactNode;
}

export const MoviesContext = createContext({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {
    const [movies, setMovies] = useState<Movie[]>([]);

    const { selectedGenreId } = useContext(GenresContext);

    useEffect(() => {
        api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
            setMovies(response.data);
        });
    }, [selectedGenreId]);

    return (
        <MoviesContext.Provider value={{
            movies
        }}>
            {children}
        </MoviesContext.Provider>
    );
}