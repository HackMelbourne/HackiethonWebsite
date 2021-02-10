import styles from "./Message.module.scss";
import astronaut from "../../assets/astronaut-on-moon.svg";

interface Props {
  // doesn't have to be JSX.Element, Message could just contain string
  children: React.ReactNode;
}

const Message = ({ children }: Props) => {
  return (
    <div>
      <div className={styles.picture}>
        <img src={astronaut} alt="astronaut on moon" />
      </div>
      <div className={styles.text}>
        <h2>{children}</h2>
      </div>
    </div>
  );
};

export default Message;
