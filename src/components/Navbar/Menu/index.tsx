import styles from "./Menu.module.scss";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  open: boolean;
}

// Menu has no dropdown functionality - can't hover on mobile
const Menu = ({ open }: Props) => {
  return (
    <nav className={open ? `${styles.menu} ${styles.open}` : styles.menu}>
      <Link to="/updates">UPDATES</Link>
      <Link to="/#">PARTICIPANTS</Link>
      <Link to="/sponsors#">SPONSORS</Link>
      <Link to="/submission#">SUBMISSION</Link>
      <a
          href="https://forms.gle/JuhBU1fiFLwe8HzH8"
          target="_blank"
          rel="noopener noreferrer"
        >
          SIGN UP
        </a>
    </nav>
  );
};

export default Menu;
