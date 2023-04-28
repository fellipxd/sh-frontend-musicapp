import Card from "../components/cards/Index"
import { UserCard } from "../components/cards/UserCard"

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <UserCard />
      <div className="recently-played">
        <h1>RECENTLY PLAYED ARTIST</h1>
        <div className="recently-played-artist">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
