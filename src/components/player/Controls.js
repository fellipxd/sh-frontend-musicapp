import { useContext, useEffect, useRef } from 'react';
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';
import { FiShuffle } from 'react-icons/fi'
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';
import AppContext from '../../state/context';

const Controls = ({ audioRef, progressBarRef }) => {
  const { state,
    dispatch,

    handleVolumeChange,

    handleMuteVolume, } = useContext(AppContext);
  const { tracks, currentTrackIndex } = state;
  const currentTrack = tracks[currentTrackIndex];
  const {
    isPlaying,
    volume,
    muteVolume,
    timeProgress,
    duration,
    repeatAnimationRef,
  } = state.controls;

  const togglePlayPause = () => {
    dispatch({ type: 'TOGGLE_PLAY_PAUSE' });
  };

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_TRACK' });
  };

  const handleNext = () => {
    dispatch({ type: 'NEXT_TRACK' });
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    dispatch({
      type: 'SET_TIME_PROGRESS',
      payload: progressBarRef.current.value,
    });
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, muteVolume, audioRef]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      repeatAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(repeatAnimationRef.current);
    }
  }, [isPlaying, audioRef, repeatAnimationRef]);

  const repeat = () => {
    const currentTime = audioRef.current.currentTime;
    dispatch({
      type: 'SET_TIME_PROGRESS',
      payload: currentTime,
    });
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    repeatAnimationRef.current = requestAnimationFrame(repeat);
  };

  return (
    <div className="controls-wrapper">
      <div className="progress">
        <span className="time current">{formatTime(timeProgress)}</span>
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <span className="time">{formatTime(duration)}</span>
      </div>
      <div className="controls">
        <div>
          <button onClick={() => handleMuteVolume()}>

            <FiShuffle />

          </button>
          <button onClick={handlePrevious}>
            <IoPlayBackSharp />
          </button>


          <button onClick={togglePlayPause}>
            {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
          </button>

          <button onClick={handleNext}>
            < IoPlayForwardSharp />
          </button>
        </div>
        <div className="volume">
          <button onClick={() => handleMuteVolume()}>
            {muteVolume || volume < 5 ? (
              <IoMdVolumeOff />
            ) : volume < 40 ? (
              <IoMdVolumeLow />
            ) : (
              <IoMdVolumeHigh />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => handleVolumeChange(e.target.value)}
            style={{
              background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
            }}
          />
        </div>
      </div>


    </div>
  );
};

export default Controls;
