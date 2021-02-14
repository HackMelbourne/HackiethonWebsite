import styles from "./Communication.module.scss";
import { FaSlack, FaEnvelope, FaFacebook } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  buttonText: string;
}

const TextBox = ({ children, icon, buttonText }: Props) => {
  return (
    <div className={styles.channel}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <div className={styles.message}>{children}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
};

// TODO: add satellite SVG
const Communication = () => {
  return (
    <section id="communication" className={styles.communication}>
      <h2>Communication Channels</h2>
      <div className={styles.channels}>
        <TextBox icon={<FaSlack/>} buttonText="JOIN">
          We will have a Slack for the hackathon, which will be useful for
          team formation and updates!
        </TextBox>
        <TextBox icon={<FaFacebook/>} buttonText="FOLLOW">
          Follow our Facebook event page for updates and highlights of the
          event!
        </TextBox>
        <TextBox icon={<FaEnvelope/>}buttonText="SUBSCRIBE">
          Subscribe to our email updates to get an email notification about
          changes to the event details.
        </TextBox>
      </div>
    </section>
  );
};

export default Communication;
