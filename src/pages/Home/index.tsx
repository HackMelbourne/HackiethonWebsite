import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.scss";

const Schedule = () => {
  return <div className={styles.schedule}>Sched</div>;
};

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.hero}>
          <Hero />
        </div>
        <div className={styles.scroll}>Scroll</div>
      </div>
      <Schedule />
    </>
  );
};

export default Home;
