import React from 'react';
import styles from "./Menu.module.scss";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../Logo"

interface Props {
  open: boolean;
}

// Menu has no dropdown functionality - can't hover on mobile
const Menu = ({ open }: Props) => {
  return (
    <nav className={open ? `${styles.menu} ${styles.open}` : styles.menu}>
      <Link className={styles.logoLink} to="/#">
        <Logo />
      </Link>
      {/* <a
        href="https://www.facebook.com/events/426944495051069/?active_tab=discussion"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        UPDATES
      </a> */}
      <a href="https://coherent-tartan-183.notion.site/Schedule-936a68649a02468f862d0dd52cd2d5dd" target="_blank" rel="noopener noreferrer" className={styles.link}>Schedule</a>
      <a href="https://coherent-tartan-183.notion.site/Prizes-36103eedb56341f58151a08b14986ba9" target="_blank" rel="noopener noreferrer" className={styles.link}>Prizes</a>
      <a href="https://coherent-tartan-183.notion.site/Hackathon-brief-5fdc05f75bf2476d8bfb4c5e63c7397d" target="_blank" rel="noopener noreferrer" className={styles.link}>About</a>
      <a href="https://coherent-tartan-183.notion.site/FAQ-64723d00d7804fe1b667ab4f3916dda1" target="_blank" rel="noopener noreferrer" className={styles.link}>FAQs</a>
      <a href="https://coherent-tartan-183.notion.site/Sponsors-3553de9dae6c4e549453ff8b85523270" target="_blank" rel="noopener noreferrer" className={styles.link}>Sponsors</a>
      {/* <a
        href="https://forms.gle/JuhBU1fiFLwe8HzH8"
        target="_blank"
        rel="noopener noreferrer"
      >
        SIGN UP
      </a> */}
    </nav>
  );
};

export default Menu;
