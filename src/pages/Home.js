import { useContext } from "react";
import Card from "../components/cards/Index";
import AppContext from "../state/context";
import useSongs from "../components/useSongs";
import Carousel from "react-elastic-carousel"
// import { useNavigate } from "react-router";

const Home = () => {
  // const navigate = useNavigate();
  const { isLoading, topPicks, recentlyPlayed, newRelease } = useSongs();

  const { musicPlaying, setMusicPlaying } = useContext(AppContext);

  return (
    <div id="home" className="page-wrapper">
      <div className="flex flex-col gap-4 w-full text-white">
        <div className="flex flex-col gap-2">
          <p>Top Picks</p>
          <div className="border border-purple-900 py-2 px-4">
            {isLoading && <div>Loading...</div>}
            <Carousel>
            {topPicks?.map((topPick) => (
              <Card
                onClick={() => {
                  setMusicPlaying(topPick);
                  console.log(musicPlaying);
                }}
                img={`https://muzira.shbootcamp.com.ng/cover/${topPick.cover_picture}`}
                spanText={topPick.artist_name}
                spanText2={topPick.music_title}
              />
            ))}
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Recently Played</p>
          {recentlyPlayed ? (
            <div className="border border-purple-900 flex justify-between gap-4 py-2 px-4">
              {recentlyPlayed?.map((recentP) => (
                <Card
                  onClick={() => {
                    setMusicPlaying(recentP);
                    console.log(musicPlaying);
                  }}
                  img={`https://muzira.shbootcamp.com.ng/cover/${recentP.cover_picture}`}
                  spanText={recentP.artist_name}
                  spanText2={recentP.music_title}
                />
              ))}
            </div>
          ) : (
            <div className="border border-purple-900 flex justify-between gap-4 py-2 px-4">
              <p>No songs streamed yet</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p>New Releases</p>
          <div className="border border-purple-900 flex justify-between gap-4 py-2 px-4">
            {newRelease?.map((newR) => (
              <Card
                onClick={() => {
                  setMusicPlaying(newR);
                  console.log(musicPlaying);
                }}
                img={`https://muzira.shbootcamp.com.ng/cover/${newR.cover_picture}`}
                spanText={newR.artist_name}
                spanText2={newR.music_title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
