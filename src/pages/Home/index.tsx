import Scroll from "../../components/Scroll";
import SpaceScene from "../../components/SpaceScene";
import styles from "./Home.module.scss";

import Title from "./Title";
import Prizes from "./Prizes";
import Communication from "./Communication";
import Resources from "./Resources";

interface Props {
  pageHeight: number;
}

const Home = ({ pageHeight }: Props) => {
  return (
    <>
      <SpaceScene />
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

export default Home;
