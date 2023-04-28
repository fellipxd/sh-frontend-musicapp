import Card from "../components/cards/Index";
import styles from "../css/Home.module.css";
import { useLoaderData } from "react-router";

const Home = () => {
  const musicData = useLoaderData();
  console.log(musicData);
  return (
    <div id="home">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p>Top Picks</p>
          <div className={styles.content}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className={styles.wrapper}>
          <p>Recently Played</p>
          <div className={styles.content}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className={styles.wrapper}>
          <p>New Releases</p>
          <div className={styles.content}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
