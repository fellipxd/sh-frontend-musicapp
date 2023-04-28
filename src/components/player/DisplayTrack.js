import { useContext, useState } from 'react';
import AppContext from '../../state/context';
import { tracks } from '../../data/tracks';
const defaultThumbnail = '/images/1.png'

const DisplayTrack = () => {
  const { trackIndex } = useContext(AppContext);
  const [lyrics, setLyrics] = useState(false)
  const toggleLyrics = () => {
    setLyrics(!lyrics)

  }
  console.log(lyrics)
  const thumbnail = tracks[trackIndex]?.thumbnail || defaultThumbnail;

  return (
    <div className="now-wrapper">
      <div className={lyrics ? "show-lyrics" : 'library-img'}>
        <img src={thumbnail} alt="player" />
      </div>
      <div className='lyric-view'>
        <p>Mans takes no L</p>
      </div>
      <div className='now-playing-who' onClick={toggleLyrics}>
        <h3>{tracks[trackIndex].title} - {tracks[trackIndex].author}</h3>
      </div>
    </div>


  );
};

export default DisplayTrack;
