import styles from "./Prizes.module.scss";
import prize1 from "../../../assets/prize1.svg";
import prize2 from "../../../assets/prize2.svg";
import prize3 from "../../../assets/prize3.svg";
import prize4 from "../../../assets/prize4.svg";
import prize5 from "../../../assets/prize5.svg";

const Prizes = () => {
  return (
    <section id="prizes" className={styles.prizes}>
      <h2>Prizes</h2>
      <div className={styles.topPrizes}>
        <div>
          <img src={prize1} height="350px" alt="large yellow planet" />
          <div className={styles.prizeDescription}>
            <h3>First Place</h3>
            <h2>AUD$500</h2>
          </div>
        </div>
        <div>
          <img src={prize2} height="350px" alt="medium blue planet" />
          <div className={styles.prizeDescription}>
            <h3>Second Place</h3>
            <h2>AUD$300</h2>
          </div>
        </div>
        <div>
          <img src={prize3} height="350px" alt="small orange planet" />
          <div className={styles.prizeDescription}>
            <h3>Third Place</h3>
            <h2>AUD$100</h2>
          </div>
        </div>
      </div>
      <div className={styles.honourableMentions}>
        <div>
          <img src={prize4} height="200px" alt="small purple planet" />
          <div className={styles.prizeDescription}>
            <h3>Most Outstanding<br/>Design</h3>
          </div>
        </div>
        <div>
          <img src={prize5} height="200px" alt="small beige planet" />
          <div className={styles.prizeDescription}>
            <h3>"Sponsor" <br/> Favourite</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
