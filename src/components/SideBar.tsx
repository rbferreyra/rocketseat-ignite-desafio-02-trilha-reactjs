import { useContext } from 'react';
import { Button } from '../components/Button';
import { GenresContext } from '../contexts/GenresContext';

import '../styles/sidebar.scss';

export function SideBar() {
  const { genres, selectedGenreId, changeGenreId } = useContext(GenresContext);

  function handleClickButton(id: number) {
    changeGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}