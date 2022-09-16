import { HashLink as Link } from "react-router-hash-link";
import styles from "./Navbar.module.scss";

import rocket from "../../assets/rocket_2022.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import Logo from "./Logo"

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
  // const subLinksMap = {
  //   participants: {
  //     ABOUT: "/#about",
  //     SCHEDULE: "https://coherent-tartan-183.notion.site/Schedule-936a68649a02468f862d0dd52cd2d5dd",
  //     "RULES & FAQ": "/#rules",
  //     COMMUNICATION: "/#communication",
  //     // RESOURCES: "/#resources",
  //     PRIZES: "/#prizes",
  //   },
  //   sponsors: {
  //     "SPONSORS LIST": "/sponsors/#list",
  //     "VIDEO FEATURES": "/sponsors/#videos",
  //   },
  // };

  // href="#" scrolls to top
  return (
    <nav className={styles.navbar}>
      <Link to="/#">
        <Logo />
      </Link>
      <div className={styles.links}>
        {/* <a
          href="https://www.facebook.com/events/426944495051069/?active_tab=discussion"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          UPDATES{" "}
          <FaExternalLinkAlt />
        </a> */}
        <a href="" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://coherent-tartan-183.notion.site/Schedule-936a68649a02468f862d0dd52cd2d5dd" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Schedule
        </a>
        <a href="https://coherent-tartan-183.notion.site/Prizes-36103eedb56341f58151a08b14986ba9" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Prizes
        </a>
        <a href="https://coherent-tartan-183.notion.site/Hackathon-brief-5fdc05f75bf2476d8bfb4c5e63c7397d" target="_blank" rel="noopener noreferrer" className={styles.link}>
          About
        </a>
        <a href="https://coherent-tartan-183.notion.site/FAQ-64723d00d7804fe1b667ab4f3916dda1" target="_blank" rel="noopener noreferrer" className={styles.link}>
          FAQs
        </a>
        <a href="https://coherent-tartan-183.notion.site/Sponsors-3553de9dae6c4e549453ff8b85523270" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Sponsors
        </a>

        {/* <DropdownLink subLinks={subLinksMap.participants}>
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
        </Link> */}
        <a
          href="https://www.eventbrite.com.au/e/hackiethon-2022-tickets-405802916447?aff=ebdshpsearchautocomplete"
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
