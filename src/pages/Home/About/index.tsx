import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>
        About <span className={styles.highlight}>Hackiethon</span>
      </h2>
      <p>Lorem ipsum</p>
    </section>
  );
};

export default About;
