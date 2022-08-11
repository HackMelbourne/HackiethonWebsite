import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <span className={styles.date}>26 - 29 September 2022</span>
      
      <div className={styles.title_container}>
        <img alt='rocket' className = {styles.rocket} src = "rocket.svg"/>
        <h1 className={styles.title}>
          <span className={styles.title_accent}>Hackie</span>
          <span>thon</span>
        </h1>
      </div>
      
      <div className={styles.subtitle}>
        <span className={styles.highlight}>
          Australia's Premier Rookie Hackathon
        </span>
      </div>
      <div className={styles.subtitle}>
        Are you a student who is new to the tech hackathon scene? Introducing the Hackiethon, a hackathon catered especially for first-time hackers. Come experience the enjoyment and learning of a hackathon in a beginner-friendly environment!
      </div>
      <div className={styles.buttons}>
        {/* Should change to <a> for easier navigation */}
        <button className={styles.button_accent}>Register now!</button>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Hero;
