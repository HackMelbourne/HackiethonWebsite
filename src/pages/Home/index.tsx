import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        Hero
      </div>
      <div className={styles.scroll}>
        Scroll
      </div>
    </div>
  );
}

export default Home;