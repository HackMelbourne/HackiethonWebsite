import Hero from "../../components/Hero/Hero";
import Scroll from "../../components/Scroll/Scroll";
import styles from "./Home.module.scss";

const Schedule = () => {
  return <div id="schedule" className={styles.schedule}>Schedule</div>;
};

const Rules = () => {
  return <div id="rules" className={styles.rules}>Rules</div>;
};

const Home = () => {
  return (
    <>
      <div id="home" className={styles.home}>
        <div className={styles.hero}>
          <Hero />
        </div>
        <div className={styles.scroll}>
          <Scroll />
        </div>
      </div>
      <Schedule />
      <Rules />
    </>
  );
};

export default Home;
