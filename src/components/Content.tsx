import { useContext } from "react";
import { MovieCard } from '../components/MovieCard';
import { GenresContext } from "../contexts/GenresContext";
import { MoviesContext } from "../contexts/MoviesContext";

import '../styles/content.scss';

export function Content() {
  const { movies } = useContext(MoviesContext);
  const { selectedGenre } = useContext(GenresContext);

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}