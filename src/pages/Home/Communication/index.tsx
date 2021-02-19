import styles from "./Communication.module.scss";
import { FaSlack, FaEnvelope, FaFacebook } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  buttonText: string;
  to: string;
}

const TextBox = ({ children, icon, buttonText, to}: Props) => {
  return (
    <div className={styles.channel}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.message}>{children}</div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} to={to}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

const Communication = () => {
  return (
    <section id="communication" className={styles.communication}>
      <h2>Communication Channels</h2>
      <div className={styles.channels}>
        <TextBox icon={<FaSlack />} buttonText="JOIN" to={"/slack#"}>
          We will have an active Slack during the hackathon, which will be used
          for team formation and updates!
        </TextBox>
        <TextBox icon={<FaFacebook />} buttonText="FOLLOW" to={"/facebook#"}>
          Follow our Facebook event page for updates and highlights of the
          event!
        </TextBox>
        <TextBox icon={<FaEnvelope />} buttonText="SUBSCRIBE" to={"/email#"}>
          Subscribe to our email updates to get an email notification about
          changes to the event details.
        </TextBox>
      </div>
    </section>
  );
};

export default Communication;
