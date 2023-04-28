// import { useContext } from 'react';
// import AppContext from '../../state/context';
// import { tracks } from '../../data/tracks';
// const DisplayTrack = () => {
//   const {
//     trackIndex
//   } = useContext(AppContext);
//   // const currentTrack = musicTracks[currentTrack];
//   console.log("tracks", tracks[trackIndex])
//   return (
//     <div className="now-wrapper">
//       {/* <h2>Now Playing:</h2> */}
//       <div className='library-img'>
//         <img src={tracks[trackIndex].thumbnail} alt="player" />
//       </div>
//       {/* 
//       <h3>{tracks[trackIndex].title}</h3> */}
//       {/* <h3>{tracks[trackIndex].author}</h3> */}
//     </div>
//   );
// };
// export default DisplayTrack;
import { useContext } from 'react';
import AppContext from '../../state/context';
import { tracks } from '../../data/tracks';
const defaultThumbnail = '/images/1.png'

const DisplayTrack = () => {
  const { trackIndex } = useContext(AppContext);

  console.log("tracks", defaultThumbnail);

  const thumbnail = tracks[trackIndex]?.thumbnail || defaultThumbnail;

  return (
    <div className="now-wrapper">
      <div className='library-img'>
        <img src={thumbnail} alt="player" />
      </div>
      <div className='now-playing-who'>
        <h3>{tracks[trackIndex].title} - {tracks[trackIndex].author}</h3>
      </div>
    </div>


  );
};

export default DisplayTrack;
