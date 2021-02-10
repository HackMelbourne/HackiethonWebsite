import { StarryBackground } from "../../components/SpaceScene";
import astronaut from "../../assets/astronaut-on-moon.svg";
import styles from "./Submission.module.scss";

const Submission = () => {
  return (
    <>
      <StarryBackground />
      <div className={styles.submission}>
        <div>
          <div className={styles.picture}>
            <img src={astronaut} alt="astronaut on moon" />
          </div>
          <div className={styles.text}>
            <h2>Nothing to see here... yet.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submission;
