import styles from "./Resources.module.scss";

const Pack = () => {
  return (
    <div className={styles.pack}>
      <h3>
        Hello there
      </h3>
      <h4>Participants Resources Pack</h4>
    </div>
  );
}

const Resources = () => {
  return (
    <section id="resources" className={styles.resources}>
      <h2>Resources</h2>
      <div className={styles.packs}>
        <Pack/>
        <Pack/>
        <Pack/>
      </div>
    </section>
  );
};

export default Resources;
