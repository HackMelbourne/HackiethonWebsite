import { StarryBackground } from "../../components/SpaceScene";
import styles from "./Sponsors.module.scss";

import Message from "../../components/Message";

const Sponsors = () => {
  return (
    <>
      <StarryBackground />
      <div className={styles.submission}>
        <Message>
            Nothing to see here... yet.
        </Message>
      </div>
    </>
  );
};

export default Sponsors;
