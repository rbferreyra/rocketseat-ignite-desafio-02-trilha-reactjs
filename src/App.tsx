import './styles/global.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { GenresProvider } from './contexts/GenresContext';
import { MoviesProvider } from './contexts/MoviesContext';

export function App() {
  return (
    <GenresProvider>
      <MoviesProvider>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SideBar />
          <Content />
        </div>
      </MoviesProvider>
    </GenresProvider>
  )
}