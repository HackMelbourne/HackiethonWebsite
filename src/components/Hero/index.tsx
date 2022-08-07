import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <span className={styles.date}>26 - 29 September 2022</span>
      <h1 className={styles.title}>Hackiethon</h1>
      <div className={styles.subtitle}>
        <span className={styles.highlight}>
          Australia's Premier Rookie Hackathon
        </span>
      </div>
      <div className={styles.subtitle}>
      Are you a student who is new to the tech hackathon scene? Introducing the Hackiethon, a hackathon catered especially for first-time hackers. Come experience the enjoyment and learning of a hackathon in a beginner-friendly environment!
      </div>
    </div>
  );
};

export default Hero;
