import { useContext, useState } from "react";
import { tracks } from "../../data/tracks";
import AppContext from "../../state/context";

export default function DisplaySongs() {
  const {
    setTrackIndex
  } = useContext(AppContext);

  const handleSongSelect = (index) => {
    setTrackIndex(index);
  };

  return (
    <div className="library-wrapper">
      {tracks.map((track, index) => (
        <div
          key={track.ID}
          className="song-list"
          onClick={() => handleSongSelect(index)}
        >
          <div className='song-ellipse'>
            <img src='/images/profile.png' alt='profile img' />
          </div>
          <div className='song-dets'>
            <p>{track.title}</p>
            <p>{track.author}</p>
          </div>
          <div className='song-author'>
            <p>{track.author}</p>
          </div>
          <div className='song-time'>
            <p>4:30</p>
          </div>
        </div>
      ))}
    </div>
  );
}
