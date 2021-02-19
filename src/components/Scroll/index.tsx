import { useEffect, useRef, useState } from "react";
import styles from "./Scroll.module.scss";
import rocket from "../../assets/rocket-white-45ccw.svg";
import {HashLink as Link} from "react-router-hash-link";

interface Props {
  pageHeight: number;
}

const Scroll = ({ pageHeight }: Props) => {
  // keep track of scrollBar using direct DOM refs
  const [scrollBarHeight, setScrollBarHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // this is only run before the initial render due to the []
  useEffect(() => {
    if (ref.current !== null) {
      setScrollBarHeight(ref.current.clientHeight);
    }
  }, []);

  // keep track of scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // function to update scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    // add listener on initial and subsequent renders. "passive" means we
    // promise handleScroll won't preventDefault to disable scrolling
    // (it does not), so the browser can respond to scrolling without
    // waiting for JS, improving scroll performance.
    window.addEventListener("scroll", handleScroll, { passive: true });

    // return cleanup function removing the listener, as you would in a
    // componentWillUnmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // when a link is clicked the screen smooth scrolls to that part of the page
  return (
    <nav>
      <div
        style={{
          // trial and error adjustments
          position: "relative",
          width: "10px",
          backgroundColor: "#ffc059",
          left: "199px",
          top: `${96 + (scrollPosition / pageHeight) * scrollBarHeight}px`,
          height: "4.1rem",
          zIndex: 0,
        }}
      />
      <div className={styles.links} ref={ref}>
        <Link to="/#"><img src={rocket} height="40px" alt="rocket" /></Link>
        <Link to="/#about" >ABOUT</Link>
        <Link to="/#schedule">SCHEDULE</Link>
        <Link to="/#rules">RULES &amp; FAQ</Link>
        <Link to="/#communication">COMMUNICATION</Link>
        <Link to="/#resources">RESOURCES</Link>
        <Link to="/#prizes">PRIZES</Link>
      </div>
    </nav>
  );
};

export default Scroll;
