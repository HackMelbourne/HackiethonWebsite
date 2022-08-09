import Hero from "../../../components/Hero";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <section id="title" className={styles.title}>
      <div className={styles.hero}>
        <Hero />
      </div>
    </section>
  );
};

export default Title;
