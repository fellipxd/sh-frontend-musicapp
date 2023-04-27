import { useContext } from "react";
import AudioPlayer from "../../components/player/AudioPlayer"
import DisplayTrack from "../../components/player/DisplayTrack"
import AppContext from "../../state/context";

const NowPlaying = () => {
  const { currentTrack,
    audioRef,
    setDuration,
    progressBarRef,
    handleNext, } = useContext(AppContext);
  return (
    <div>
      <AudioPlayer>
        <DisplayTrack
          {...{
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext,
          }}
        />
      </AudioPlayer>
    </div>
  )
}

export default NowPlaying
