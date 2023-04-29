import { useContext, useEffect, useState } from "react";
import Card from "../components/cards/Index";
import styles from "../css/Home.module.css";
import AppContext from "../state/context";
// import { useNavigate } from "react-router";

const Home = () => {
  // const navigate = useNavigate();
  const user = sessionStorage.getItem("sessionId");
  const user_id = parseInt(user);

  const [isLoading, setIsLoading] = useState(true);

  const {
    topPicks,
    setTopPicks,
    recentlyPlayed,
    setRecentlyPlayed,
    newRelease,
    setNewRelease,
  } = useContext(AppContext);

  useEffect(() => {
      async function topPicks() {
        const res = await fetch(
          "https://muzira.shbootcamp.com.ng/top_picks.php"
        );
        const data = await res.json();
        const dataMessage = data.message.top_picks;
        console.log(data.message);
        // setTopPicks(dataMessage);
        // setIsLoading(false)
      }
      topPicks();

    async function recentlyPlayed() {
      const res = await fetch(
        "https://muzira.shbootcamp.com.ng/recently_played.php"
      );
      const data = await res.json();
      const dataMessage = data.message.recently_played;
      console.log(data);
      setRecentlyPlayed(dataMessage);
    }
    recentlyPlayed();

    async function newRelease() {
      const res = await fetch(
        "https://muzira.shbootcamp.com.ng/new_release.php"
      );
      const data = await res.json();
      const dataMessage = data.message.new_release;
      console.log(dataMessage);
      setNewRelease(dataMessage);
    }
    newRelease();
  }, [user_id, setTopPicks, setNewRelease, setRecentlyPlayed]);

  return (
    <div id="home">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p>Top Picks</p>
          <div className={styles.content}>
            {isLoading && <div>Loading...</div>}
            {topPicks.map((topPick) => (
              <Card
                spanText={topPick.artist_name}
                spanText2={topPick.music_title}
              />
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <p>Recently Played</p>
          <div className={styles.content}>
            {recentlyPlayed.map((recentP) => (
              <Card
                spanText={recentP.artist_name}
                spanText2={recentP.music_title}
              />
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <p>New Releases</p>
          <div className={styles.content}>
            {newRelease.map((newR) => (
              <Card spanText={newR.artist_name} spanText2={newR.music_title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
