import styles from "./Communication.module.scss";
import { FaSlack, FaFacebook, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  button: JSX.Element;
}

const TextBox = ({ children, icon, button }: Props) => {
  return (
    <div className={styles.channel}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.message}>{children}</div>
      <div className={styles.buttonContainer}>{button}</div>
    </div>
  );
};

const Communication = () => {
  return (
    <section id="communication" className={styles.communication}>
      <h2>Communication Channels</h2>
      {/* <div>
        A guide on how to setup Slack and find a team can be found{" "}
        <Link to={"/slack#"}>here</Link>.
      </div> */}
      <div className={styles.channels}>
        <TextBox
          icon={<FaSlack />}
          button={
            <a
              className={styles.button}
              href="https://join.slack.com/t/hackiethon2021/shared_invite/zt-o5qq6rsj-lwIl24_MbUsWm2Fcvr~C8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN {" "}
              <FaExternalLinkAlt />
            </a>
          }
        >
          We will have an active Slack during the hackathon, which will be used
          for team formation and updates!
        </TextBox>
        <TextBox
          icon={<FaFacebook />}
          button={
            <a
              className={styles.button}
              href="https://www.facebook.com/events/426944495051069"
              target="_blank"
              rel="noopener noreferrer"
            >
              FOLLOW {" "}
              <FaExternalLinkAlt />
            </a>
          }
        >
          Follow our Facebook event page for updates and highlights of the
          event!
        </TextBox>
      </div>
    </section>
  );
};

export default Communication;
