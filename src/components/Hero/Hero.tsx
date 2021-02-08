import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2 className={styles.date}>2-5 April 2021</h2>
      <h1 className={styles.title}>Hackiethon</h1>
      <h3 className={styles.subtitle}>Melbourne's Premier Rookie Hackathon</h3>
    </div>
  );
};

export default Hero;
