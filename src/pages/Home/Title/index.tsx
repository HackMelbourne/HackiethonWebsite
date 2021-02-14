import Hero from "../../../components/Hero";
import logo from "../../../assets/hm-logo-dark.svg";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <section id="title" className={styles.title}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.logo}>
        <a
          href="https://hackmelb.org"
          title="HackMelbourne's website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="HackMelbourne Logo" />
        </a>
      </div>
    </section>
  );
};

export default Title;
