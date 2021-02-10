import styles from "./Communication.module.scss";

interface Props {
  children: React.ReactNode;
  buttonText: string;
}

const TextBox = ({ children, buttonText }: Props) => {
  return (
    <div className={styles.channel}>
      <div className={styles.message}>{children}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Communication = () => {
  return (
    <section id="communication" className={styles.communication}>
      <h2>Communication</h2>
      <div className={styles.channels}>
        <TextBox buttonText="JOIN">
          We will have a Discord for the hackathon, which will be useful for
          team formation and updates!
        </TextBox>
        <TextBox buttonText="FOLLOW">
          Follow our Facebook event page for updates and highlights of the
          event!
        </TextBox>
        <TextBox buttonText="SUBSCRIBE">
          Subscribe to our email updates to get an email notification about
          changes to the event details.
        </TextBox>
      </div>
    </section>
  );
};

export default Communication;
