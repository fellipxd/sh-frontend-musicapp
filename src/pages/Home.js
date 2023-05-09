import { useContext } from "react";
import Card from "../components/cards/Index";
import styles from "../css/Home.module.css";
import AppContext from "../state/context";
import useSongs from "../components/useSongs";
// import { useNavigate } from "react-router";

const Home = () => {
  // const navigate = useNavigate();
  const { isLoading, topPicks, recentlyPlayed, newRelease } = useSongs();

  const {musicPlaying, setMusicPlaying } = useContext(AppContext);

  return (
    <div id="home" className="page-wrapper">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p>Top Picks</p>
          <div className={`${styles.content}`}>
            {isLoading && <div>Loading...</div>}
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
          </div>
        </div>
        <div className={styles.wrapper}>
          <p>Recently Played</p>
          {recentlyPlayed ? (
            <div className={styles.content}>
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
            <p>No songs streamed yet</p>
          )}
        </div>
        <div className={styles.wrapper}>
          <p>New Releases</p>
          <div className={styles.content}>
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
