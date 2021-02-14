import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>
        About <span className={styles.highlight}>Hackiethon</span>
      </h2>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          id velit ut elit pulvinar fringilla. Duis vitae metus lacus. Vivamus
          iaculis eros orci. Integer ornare justo a nunc tempus suscipit. Morbi
          viverra vitae velit pellentesque placerat. Duis feugiat ipsum ante, ac
          mollis est congue in. Praesent in felis vel mi pretium auctor ac ac
          sem. Suspendisse nulla arcu, dignissim a condimentum eget, blandit
          quis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur ac felis in metus bibendum fringilla. Curabitur id rhoncus
          tellus. Mauris sed sem ut magna accumsan porta. Sed feugiat orci eu
          ante imperdiet pellentesque.
        </p>
      </div>
    </section>
  );
};

export default About;
