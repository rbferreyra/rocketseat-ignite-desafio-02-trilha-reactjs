import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Genre {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface GenresContextData {
    genres: Genre[],
    selectedGenreId: number;
    selectedGenre: Genre;
    changeGenreId: (id: number) => void;
}

interface GenresProviderProps {
    children: ReactNode;
}

export const GenresContext = createContext({} as GenresContextData);

export function GenresProvider({ children }: GenresProviderProps) {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [selectedGenreId, setSelectedGenreId] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

    useEffect(() => {
        api.get<Genre[]>('genres').then(response => {
            setGenres(response.data);
        });
    }, []);

    useEffect(() => {
        api.get<Genre>(`genres/${selectedGenreId}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [selectedGenreId]);

    function changeGenreId(id: number) {
        setSelectedGenreId(id);
    }

    return (
        <GenresContext.Provider value={{
            genres,
            selectedGenreId,
            selectedGenre,
            changeGenreId
        }}>
            {children}
        </GenresContext.Provider>
    );
}