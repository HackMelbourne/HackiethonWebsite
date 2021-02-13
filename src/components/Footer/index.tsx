import styles from "./Footer.module.scss";
import { FaRegEnvelope, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <a href="" title="Send us an email!">
          <FaRegEnvelope />
        </a>
        <a href="" title="Keep up with our Facebook!">
          <FaFacebookSquare />
        </a>
        <a href="" title="Check us out on LinkedIn!">
          <FaLinkedin />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
