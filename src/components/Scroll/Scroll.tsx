import { useEffect, useState } from "react";
import styles from "./Scroll.module.scss";

const Scroll = () => {
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
      window.addEventListener('scroll', handleScroll, { passive: true });

      // return cleanup function removing the listener, as you would in a
      // componentWillUnmount
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  // when a link is clicked the screen smooth scrolls to that part of the page
  return (
    <nav className={styles.scroll}>
      {/* <div className={styles.thumb}/> */}
      <div className={styles.links}>
        <a href="#home"> </a>
        <a href="#schedule">SCHEDULE</a>
        <a href="#rules">RULES &amp; FAQ</a>
        <a href="#communication">COMMUNICATION</a>
        <a href="#resources">RESOURCES</a>
        <a href="#prizes">PRIZES</a>
      </div>
    </nav>
  );
};

export default Scroll;
