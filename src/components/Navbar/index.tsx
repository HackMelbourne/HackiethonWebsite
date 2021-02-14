import { HashLink as Link } from "react-router-hash-link";
import styles from "./Navbar.module.scss";

import rocket from "../../assets/rocket-orange.svg";
import { useState } from "react";

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

// a typed object in JS: string attributes to string values, like a Map
type StringMap = { [label: string]: string };

interface Props {
  children: JSX.Element;
  subLinks: StringMap;
}

const DropdownLink = ({ children, subLinks }: Props) => {
  const [isShown, setIsShown] = useState(false);

  const showMenu = () => setIsShown(true);
  const hideMenu = () => setIsShown(false);

  return (
    <div onMouseEnter={showMenu} onMouseLeave={hideMenu}>
      {children}
      {isShown ? (
        <nav className={styles.dropdownMenu}>
          <ul>
            {Object.keys(subLinks).map((label) => (
              <li>
                <Link to={subLinks[label]}>
                  <div>
                    {label}
                    <span>&gt;</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

const Navbar = () => {
  const subLinksMap = {
    participants: {
      "ABOUT": "/participants/#about",
      "SCHEDULE": "/participants/#schedule",
      "RULES & FAQ": "/participants/#rules",
      "COMMUNICATION": "/participants/#communication",
      "RESOURCES": "/participants/#resources",
      "PRIZES": "/participants/#prizes",
    },
    sponsors: {
    },
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/#title">
        <Logo />
      </Link>
      <div className={styles.links}>
        <Link to="/updates" className={styles.link}>
          UPDATES
        </Link>
        <DropdownLink subLinks={subLinksMap.participants}>
          <Link to="/participants/#title" className={styles.link}>
            PARTICIPANTS
          </Link>
        </DropdownLink>
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
