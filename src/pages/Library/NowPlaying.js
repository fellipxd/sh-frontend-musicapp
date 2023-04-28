import { useContext } from "react";
import MusicPlayer from "../../components/player/AudioPlayer"
import DisplayTrack from "../../components/player/DisplayTrack"
import AppContext from "../../state/context";

const NowPlaying = () => {
  return (
    <div >
      <DisplayTrack />
    </div>
  )
}

export default NowPlaying
