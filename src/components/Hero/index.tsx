import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <span className={styles.date}>2 - 5 April 2021</span>
      <h1 className={styles.title}>Hackiethon</h1>
      <div className={styles.subtitle}>
        <span className={styles.highlight}>
          Australia's Premier Rookie Hackathon
        </span>
      </div>
      <div className={styles.subtitle}>
        Hosted by {" "}
        <a
          href="https://hackmelb.org"
          title="HackMelbourne's website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.highlight}>HackMelbourne</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
