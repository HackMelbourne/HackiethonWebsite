import styles from "./Menu.module.scss";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  open: boolean;
}

const Menu = ({ open }: Props) => {
  // the three empty div's are the bars that make up the burger
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
