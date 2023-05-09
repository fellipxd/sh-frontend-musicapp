import { useContext } from "react";
import useSongs from "../../components/useSongs";
import AppContext from "../../state/context";

const Songs = () => {
  const { topPicks } = useSongs();
  const {setMusicPlaying} = useContext(AppContext)

  return (
    <div className="h-[300px] border border-purple-800 rounded-lg p-4">
      {topPicks &&
        topPicks.map((topPick) => (
          <div className="mb-4">
            <div className="flex justify-between items-end" onClick={() => setMusicPlaying(topPick)}>
              <div className="flex gap-3">
                <span>
                  <img
                    src={`https://muzira.shbootcamp.com.ng/cover/${topPick.cover_picture}`}
                    alt="cover_picture"
                    className=" inline-block w-12 h-12 rounded-full object-cover"
                  />
                </span>
                <div className="flex flex-col">
                  <span className="font-bold capitalize">
                    {topPick.music_title}
                  </span>
                  <span className=" font-thin capitalize text-gray-400">
                    {topPick.artist_name}
                  </span>
                </div>
              </div>
              <div className=" justify-self-start">
                <span className=" font-thin capitalize text-gray-400">
                  {topPick.artist_name}
                </span>
              </div>
              <div>
              <span className=" font-thin capitalize text-gray-400">
song length
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Songs;
