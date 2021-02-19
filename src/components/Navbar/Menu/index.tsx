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
      <Link to="/signUp#">SIGN UP</Link>
    </nav>
  );
};

export default Menu;
