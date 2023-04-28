import { useContext } from "react";
import MusicPlayer from "../../components/player/AudioPlayer"
import DisplayTrack from "../../components/player/DisplayTrack"
import AppContext from "../../state/context";

const Album = () => {
  const { currentTrack,
    audioRef,
    setDuration,
    progressBarRef,
    handleNext, } = useContext(AppContext);
  return (
    <div>

    </div>
  )
}

export default Album
