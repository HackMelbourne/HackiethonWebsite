import Scroll from "../../components/Scroll";
import SpaceScene from "../../components/SpaceScene";
import styles from "./Home.module.scss";

import Title from "./Title";

interface Props {
  pageHeight: number;
}

const Home = ({ pageHeight }: Props) => {
  return (
    <>
      <div className={styles.space}>
        <SpaceScene />
      </div>
      <div className={styles.scroll}>
        <Scroll pageHeight={pageHeight} />
      </div>
      <Title />
      <Schedule />
      <Rules />
      <Communication />
      <Resources />
      <Prizes />
    </>
  );
};

const Schedule = () => {
  return (
    <section id="schedule" className={styles.schedule}>
      Schedule
    </section>
  );
};

const Rules = () => {
  return (
    <section id="rules" className={styles.rules}>
      Rules
    </section>
  );
};

const Communication = () => {
  return (
    <section id="communication" className={styles.communication}>
      Communication
    </section>
  );
};

const Resources = () => {
  return (
    <section id="resources" className={styles.resources}>
      Resources
    </section>
  );
};

const Prizes = () => {
  return (
    <section id="prizes" className={styles.prizes}>
      <h2>Prizes</h2>
    </section>
  );
};

export default Home;
