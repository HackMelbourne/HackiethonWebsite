import styles from "./Prizes.module.scss";

const Prizes = () => {
  return (
    <section id="prizes" className={styles.prizes}>
      <h2>Prizes</h2>
      <div className={styles.topPrizes}>
        <div className={styles.prize1}>
          <h3>First Place</h3>
          <span>$500</span>
        </div>
        <div className={styles.prize2}>
          <h3>Second Place</h3>
          <span>$300</span>
        </div>
        <div className={styles.prize3}>
          <h3>Third Place</h3>
          <span>$100</span>
        </div>
      </div>
      <div className={styles.honourableMentions}>
        <div className={styles.prize4}>
          <h3>
            Most Outstanding Design
          </h3>
          <span>$70 worth of sponsor swag</span>
        </div>
        <div className={styles.prize5}>
          <h3>"Sponsor" Favourite</h3>
          <span>$70 worth of sponsor swag</span>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
