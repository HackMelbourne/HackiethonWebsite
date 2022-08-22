import styles from "./Hero.module.scss";
import {ReactComponent as LogoText} from '../../assets/logo/3DText.svg';
import {ReactComponent as Rocket} from '../../assets/logo/rocket.svg';


const Hero = () => {
  return (
      <>
        <div className={styles.bg}/>
        <div className={styles.bg_2}/>
        <div style={{zIndex: '1 !important', position: 'relative'}}>
          <span className={styles.date}>26 - 29 September 2022</span>

          <div className={styles.title_container}>
            <Rocket className={styles.rocket}/>
            <LogoText className={styles.title}/>
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
      </>
  );
};

export default Hero;
