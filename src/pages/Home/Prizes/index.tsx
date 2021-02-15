import styles from "./Prizes.module.scss";
import prize4 from "../../../assets/prize4.svg";
import prize5 from "../../../assets/prize5.svg";

const Prizes = () => {
  return (
    <section id="prizes" className={styles.prizes}>
      <h2>Prizes</h2>
      <div className={styles.topPrizes}>
        <div className={styles.prize1}>
          <h3>First Place</h3>
          <span>AUD$500</span>
        </div>
        <div className={styles.prize2}>
          <h3>Second Place</h3>
          <span>AUD$300</span>
        </div>
        <div className={styles.prize3}>
          <h3>Third Place</h3>
          <span>AUD$100</span>
        </div>
      </div>
      <div className={styles.honourableMentions}>
        <div className={styles.prize4}>
          <h3>
            Most Outstanding
            <br />
            Design
          </h3>
        </div>
        <div className={styles.prize5}>
          <h3>"Sponsor" Favourite</h3>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
