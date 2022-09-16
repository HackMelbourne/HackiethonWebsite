import React from 'react';
import styles from "./Hero.module.scss";
import {ReactComponent as LogoText} from '../../assets/logo/3DText.svg';
import {ReactComponent as Rocket} from '../../assets/logo/rocket.svg';
import classnames from "classnames";

const Hero = () => {
  return (
    <>
      <div className={classnames(styles.bg, styles.small)} />
      <div className={classnames(styles.bg, styles.large)} />
      <div style={{ position: "relative", zIndex: 1, marginTop:90 }}>
        <span className={styles.date}>26 - 29 September 2022</span>

        <div className={styles.title_container}>
          <Rocket className={styles.rocket} />
          <LogoText className={styles.title} />
        </div>

        <div className={styles.subtitle}>
          <span className={styles.highlight}>
            Australia's Premier Rookie Hackathon
          </span>
        </div>
        <div className={styles.subtitle}>
          Are you a student who is new to the tech hackathon scene?<br/>
          Introducing the Hackiethon, a hackathon catered especially for first-time hackers.<br/>
          Come experience the enjoyment and learning of a hackathon in a beginner-friendly environment!
        </div>
        <div className={styles.buttons}>
          {/* Should change to <a> for easier navigation */}
          <a href="https://www.eventbrite.com.au/e/hackiethon-2022-tickets-405802916447?aff=ebdshpsearchautocomplete" target="_blank" rel="noopener noreferrer"><button className={styles.button_accent}>Register now!</button></a>
          <a href="https://coherent-tartan-183.notion.site/Participants-Handbook-dc64e20afd2d415bab3f31d2d4c3e3cd" target="_blank" rel="noopener noreferrer"><button>Learn more</button></a>
        </div>
      </div>
    </>
  );
};

export default Hero;
