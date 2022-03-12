import Scroll from "../../components/Scroll";
import SpaceScene, { StarryBackground } from "../../components/SpaceScene";
import styles from "./Home.module.scss";

import Title from "./Title";
import Prizes from "./Prizes";
import Communication from "./Communication";
import Schedule from "./Schedule";
import About from "./About";
import Rules from "./Rules";

interface Props {
  pageHeight: number;
}

const Home = ({ pageHeight }: Props) => {
  return (
    <>
      <StarryBackground />
      <SpaceScene />
      <div className={styles.scroll}>
        <Scroll pageHeight={pageHeight} />
      </div>
      <Title />
      <About />
      <Schedule />
      <Rules />
      <Communication />
      {/* <Resources /> */}
      <Prizes />
    </>
  );
};

export default Home;
