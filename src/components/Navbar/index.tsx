import { HashLink as Link } from "react-router-hash-link";
import styles from "./Navbar.module.scss";

import rocket from "../../assets/rocket-yellow.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={rocket} height="60px" alt="rocket" />
      <div>
        <div className={styles.text}>Hackiethon</div>
        <div className={styles.subtext}>by HackMelbourne</div>
      </div>
    </div>
  );
};

// a typed JS object: string attributes to string values, like a Map
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

// React Ref magic to detect raw events to trigger a function
const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Navbar = () => {
  // this is for the menu on mobile
  const [open, setOpen] = useState(false);

  // when the user clicks/taps outside the open Menu, it closes.
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));

  // map dropdown labels to href's
  const subLinksMap = {
    participants: {
      ABOUT: "/#about",
      SCHEDULE: "/#schedule",
      "RULES & FAQ": "/#rules",
      COMMUNICATION: "/#communication",
      // RESOURCES: "/#resources",
      PRIZES: "/#prizes",
    },
    sponsors: {
      "SPONSORS LIST": "/sponsors/#list",
      "VIDEO FEATURES": "/sponsors/#videos",
    },
  };

  // href="#" scrolls to top
  return (
    <nav className={styles.navbar}>
      <Link to="/#">
        <Logo />
      </Link>
      <div className={styles.links}>
        <a
          href="https://www.facebook.com/events/426944495051069/?active_tab=discussion"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          UPDATES{" "}
          <FaExternalLinkAlt />
        </a>
        <DropdownLink subLinks={subLinksMap.participants}>
          <Link to="/#" className={styles.link}>
            PARTICIPANTS
          </Link>
        </DropdownLink>
        <DropdownLink subLinks={subLinksMap.sponsors}>
          <Link to="/sponsors/#" className={styles.link}>
            SPONSORS
          </Link>
        </DropdownLink>
        <Link to="/submission/#" className={styles.link}>
          SUBMISSION
        </Link>
        <a
          href="https://forms.gle/JuhBU1fiFLwe8HzH8"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          SIGN UP
        </a>
      </div>
      <div className={styles.mobileNav} ref={ref}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </nav>
  );
};

export default Navbar;
