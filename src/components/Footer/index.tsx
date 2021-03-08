import styles from "./Footer.module.scss";
import { FaRegEnvelope, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <a
          href="mailto:hackmelb.team@gmail.com"
          title="Send us an email!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegEnvelope />
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
