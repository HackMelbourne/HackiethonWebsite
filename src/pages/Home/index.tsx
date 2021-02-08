import Hero from "../../components/Hero/Hero";
import Scroll from "../../components/Scroll/Scroll";
import SpaceScene from "../../components/SpaceScene/SpaceScene";
import styles from "./Home.module.scss";

const Schedule = () => {
  return (
    <div id="schedule" className={styles.schedule}>
      Schedule
    </div>
  );
};

const Rules = () => {
  return (
    <div id="rules" className={styles.rules}>
      Rules
    </div>
  );
};

const Communication = () => {
  return (
    <div id="communication" className={styles.communication}>
      Communication
    </div>
  );
};

const Resources = () => {
  return (
    <div id="resources" className={styles.resources}>
      Resources
    </div>
  );
};

const Prizes = () => {
  return (
    <div id="prizes" className={styles.prizes}>
      Prizes
    </div>
  );
};

interface Props {
  pageHeight: number;
}

const Home = ({pageHeight}: Props) => {
  return (
    <>
      <div id="home" className={styles.home}>
        <SpaceScene />
        <div className={styles.hero}>
          <Hero />
        </div>
        <div className={styles.scroll}>
          <Scroll pageHeight={pageHeight} />
        </div>
      </div>
      <Schedule />
      <Rules />
      <Communication />
      <Resources />
      <Prizes />
    </>
  );
};

export default Home;
