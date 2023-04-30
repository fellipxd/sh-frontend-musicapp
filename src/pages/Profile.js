import { useContext, useEffect } from "react";
import Card from "../components/cards/Index";
import { UserCard } from "../components/cards/UserCard";
import AppContext from "../state/context";

const Profile = () => {
  const user = sessionStorage.getItem("sessionId");
  const user_id = parseInt(user);

  const {
    isLoading,
    setIsLoading,
    errMessage,
    setErrMessage,
    profile,
    setProfile,
    recentlyPlayed,
    setRecentlyPlayed,
  } = useContext(AppContext);

  useEffect(() => {
    async function displayUser() {
      const res = await fetch(
        `http://muzira.shbootcamp.com.ng/display_user.php?sessionId=${user_id}`
      );
      const data = await res.json();
      if (data.status === "error") {
        setErrMessage(data.message);
      } else {
        setProfile(data.message.all_details);
        setIsLoading(false);
        console.log(data);
      }
    }
    displayUser();

    async function recentlyPlayed() {
      const res = await fetch(
        `https://muzira.shbootcamp.com.ng/recently_played.php?sessionId=${user_id}`
      );
      const data = await res.json();
      if (data.status === "error") {
        setErrMessage(data.message);
      } else {
        setRecentlyPlayed(data.message.all_details);
        setIsLoading(false);
        console.log(data);
      }
    }
    recentlyPlayed();
  }, [setErrMessage, setIsLoading, user_id, setProfile, setRecentlyPlayed]);

  return (
    <div className="profile-wrapper">
      {profile &&
        profile.map((p) => (
          <UserCard
            name={p.profilename}
            playlist={p.total_playlist}
            follower={p.follower}
            following={p.following}
          />
        ))}
      <div className="recently-played">
        <h1>RECENTLY PLAYED ARTIST</h1>
        <div className="recently-played-artist">
          {isLoading && <div>Loading...</div>}
          {errMessage}
          {recentlyPlayed &&
            recentlyPlayed.map((recentP) => (
              <Card
                spanText={recentP.artist_name}
                spanText2={recentP.music_title}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
