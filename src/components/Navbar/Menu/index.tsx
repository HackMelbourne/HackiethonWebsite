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
      <Link to="/#schedule" className={styles.link}>Schedule</Link>
      <Link to="/#prizes" className={styles.link}>Prizes</Link>
      <Link to="/#about" className={styles.link}>About</Link>
      <Link to="/#faqs" className={styles.link}>FAQs</Link>
      <Link to="/#submission" className={styles.link}>Submission</Link>
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
