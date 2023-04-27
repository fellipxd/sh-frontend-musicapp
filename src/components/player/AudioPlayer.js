import { useContext } from 'react';
import { tracks } from '../../data/tracks';

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgresBar';
import AppContext from '../../state/context';

const AudioPlayer = ({ children }) => { // update parameter name to "children"
  const {
    currentTrack,
    audioRef,
    setDuration,
    progressBarRef,
    handleNext,
    duration,
    setTimeProgress,
    trackIndex,
    setTrackIndex,
    setCurrentTrack,
    timeProgress,
  } = useContext(AppContext);

  return (
    <>
      <div className="audio-player">
        <div className="inner">
          {children} {/* render the children components here */}

          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
              timeProgress,
            }}
          />

        </div>
      </div>
    </>
  );
};

export default AudioPlayer;

// NowPlaying component remains the same.
