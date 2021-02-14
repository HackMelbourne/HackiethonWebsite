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
        <img src={logo} alt="HackMelbourne Logo" />
      </div>
    </section>
  );
};

export default Title;