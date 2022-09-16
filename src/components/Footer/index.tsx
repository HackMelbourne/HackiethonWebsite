import React from 'react';
import styles from "./Footer.module.scss";
import { FaDiscord, FaRegEnvelope, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <a
          href="https://discord.gg/tEQ5m6ayTV"
          title="Join our Discord!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
        </a>
        <a
          href="https://www.facebook.com/hackmelbourne"
          title="Keep up with our Facebook!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.linkedin.com/company/67711292/"
          title="Check us out on LinkedIn!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
