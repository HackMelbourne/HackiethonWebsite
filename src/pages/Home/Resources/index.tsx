import styles from "./Resources.module.scss";
import astronaut1 from "../../../assets/astronaut-participants.svg";
import astronaut2 from "../../../assets/astronaut-mentors.svg";
import astronaut3 from "../../../assets/astronaut-judges.svg";

const Resources = () => {
  return (
    <section id="resources" className={styles.resources}>
      <h2>Resources</h2>
      <div className={styles.packs}>
        <div className={styles.pack}>
          <h3>Participants</h3>
          <h4>Participants Resources Pack</h4>
          <div className={styles.imgContainer}>
            <img src={astronaut1} alt="blue astronaut face" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>DOWNLOAD</button>
          </div>
        </div>
        <div className={styles.pack}>
          <h3>Mentors</h3>
          <h4>Mentors Resources Pack</h4>
          <div className={styles.imgContainer}>
            <img src={astronaut2} alt="purple astronaut face" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>DOWNLOAD</button>
          </div>
        </div>
        <div className={styles.pack}>
          <h3>Judges</h3>
          <h4>Judges Resources Pack</h4>
          <div className={styles.imgContainer}>
            <img src={astronaut3} alt="orange astronaut face" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>DOWNLOAD</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
