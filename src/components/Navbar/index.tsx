import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

import rocket from "../../assets/rocket-orange.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={rocket} height="60px" alt="rocket" />
      <div>
        <div className={styles.text}>HACKIEthon</div>
        <div className={styles.subtext}>by HackMelbourne</div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles.links}>
        <Link to="/updates" className={styles.link}>
          UPDATES
        </Link>
        <Link to="/participants" className={styles.link}>
          PARTICIPANTS
        </Link>
        <Link to="/sponsors" className={styles.link}>
          SPONSORS
        </Link>
        <Link to="/submission" className={styles.link}>
          SUBMISSION
        </Link>
        <Link to="signUp" className={styles.button}>
          SIGN UP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
