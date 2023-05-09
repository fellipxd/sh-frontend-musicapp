import { useContext, useEffect } from "react";
import AppContext from "../state/context";

const useSongs = () => {
  const user = sessionStorage.getItem("sessionId");
  const user_id = parseInt(user);

  const {
    topPicks,
    setTopPicks,
    newRelease,
    setNewRelease,
    recentlyPlayed,
    setRecentlyPlayed,
    isLoading,
    setIsLoading,
  } = useContext(AppContext);

  useEffect(() => {
    async function topPicks() {
      const res = await fetch("https://muzira.shbootcamp.com.ng/top_picks.php");
      const data = await res.json();
      const dataMessage = data.message.top_picks;
      console.log(data.message);

      setTopPicks(dataMessage);
      setIsLoading(false);
    }
    topPicks();

    async function recentlyPlayed() {
      const res = await fetch(
        `https://muzira.shbootcamp.com.ng/recently_played.php?sessionId=${user_id}`
      );
      const data = await res.json();
      const dataMessage = data.message.recently_played;
      console.log(data);
      setRecentlyPlayed(dataMessage);
      setIsLoading(false);
    }
    recentlyPlayed();

    async function newRelease() {
      const res = await fetch(
        "https://muzira.shbootcamp.com.ng/new_release.php"
      );
      const data = await res.json();
      const dataMessage = data.message.new_release;
      setNewRelease(dataMessage);
      setIsLoading(false);
    }
    newRelease();
  }, [setTopPicks, setNewRelease, setRecentlyPlayed, user_id, setIsLoading]);

  return { topPicks, recentlyPlayed, newRelease, isLoading };
};

export default useSongs;
