import { useContext, useEffect } from "react";
import styles from "../css/Playlist.module.css";
import CardTwo from "../components/cards/CardTwo";
import AppContext from "../state/context";

const Playlist = () => {
  const user = sessionStorage.getItem("sessionId");
  const user_id = parseInt(user);

  console.log("user", user_id);

  const { playlist, setPlaylist, isLoading, setIsLoading } =
    useContext(AppContext);

  useEffect(() => {
    async function displayPlaylist() {
      const res = await fetch(
        `https://muzira.shbootcamp.com.ng/display_playlist.php?sessionId=${user_id}`
      );
      const data = await res.json();
      const dataMessage = data.playlist.all_playlist;
      setPlaylist(dataMessage);
      setIsLoading(false);
      console.log(data);
    }
    displayPlaylist();
  }, [setPlaylist, setIsLoading, user_id]);

  return (
    <div className="page-wrapper">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p>My Playlist</p>
          <div className={styles.content}>
            {isLoading && <div>Loading...</div>}
            {playlist && playlist.map((list) => (
              <CardTwo headerText={list.playlist_name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
