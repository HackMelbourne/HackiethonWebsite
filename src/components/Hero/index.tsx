import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <span className={styles.date}>2 - 5 April 2021</span>
      <h1 className={styles.title}>HACKIEthon</h1>
      <div className={styles.subtitle}>
        <span className={styles.highlight}>
          Melbourne's Premier Rookie Hackathon
        </span>
      </div>
      <div className={styles.subtitle}>
        Hosted by <span className={styles.highlight}>HackMelbourne</span>
      </div>
    </div>
  );
};

export default Hero;
