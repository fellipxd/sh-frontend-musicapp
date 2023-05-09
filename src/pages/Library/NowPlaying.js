import { useContext } from "react";
import AppContext from "../../state/context";

const NowPlaying = () => {
  const { musicPlaying } = useContext(AppContext);

  return (
    <div className="relative">
      <img
        src={`https://muzira.shbootcamp.com.ng/cover/${musicPlaying?.cover_picture}`}
        alt="cover_picture"
        className="w-full h-[350px] object-cover"
      />
      <span className="p-4 w-11/12 flex justify-center bg-black border border-purple-950 absolute bottom-8 left-8 right-8">
        {musicPlaying?.music_title} - {musicPlaying.artist_name}
      </span>
    </div>
  );
};

export default NowPlaying;
