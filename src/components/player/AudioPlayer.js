
import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { tracks } from "../../data/tracks";
import AppContext from "../../state/context";
import { IoMdPlay, IoMdPause } from "react-icons/io"


export default function MusicPlayer(show) {
  const {
    setTrackIndex,
    musicPlaying
  } = useContext(AppContext);


  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? tracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };
  const play = <IoMdPlay style={{ fill: "white" }} />
  const pause = <IoMdPause style={{ fill: "white" }
  } />



  return (
    <div className="controler" >
      <AudioPlayer
        style={{ boxShadow: "none", color: "white", background: "transparent", }}
        src={`https://muzira.shbootcamp.com.ng/musics/${musicPlaying.music}`}
        onPlay={(e) => console.log(musicPlaying.music)}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${musicPlaying.music}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        customIcons={{ play: play, pause: pause }}
      />
    </div>
  );
}
