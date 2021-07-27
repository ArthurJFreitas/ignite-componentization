import { Button } from './../components/Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Array<GenreResponseProps>;
  setSelectedGenreId: (id: number) => void;
  selectedGenreId: Number;
}

export function SideBar({
  genres,
  setSelectedGenreId,
  selectedGenreId,
}: SideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
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
  );
}
