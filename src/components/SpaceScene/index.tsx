import styles from "./SpaceScene.module.scss";

import rocket from "../../assets/rocket-colour.svg";
import planet1 from "../../assets/planet-purple-cropped.png";
import planet2 from "../../assets/planet-blue.svg";

const StarryBackground = () => {
  return (
    <>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
    </>
  );
}

const SpaceScene = () => {
  return (
    <div className={styles.scene}>
      <div className={styles.rocket}>
        <img src={rocket} height="250px" alt="rocket" />
      </div>
      <div className={styles.planet1}>
        <img src={planet1} alt="purple planet" />
      </div>
      <div className={styles.planet2}>
        <img src={planet2} alt="blue planet" />
      </div>
      <div className={styles.star1} />
      <div className={styles.star2} />
      <div className={styles.star3} />
      <div className={styles.star4} />
      <div className={styles.star5} />
      <div className={styles.star6} />
      <div className={styles.star7} />
      <div className={styles.star8} />
    </div>
  );
};

export { SpaceScene as default, StarryBackground };