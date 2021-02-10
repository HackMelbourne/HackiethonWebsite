import { StarryBackground } from "../../components/SpaceScene";
import styles from "./Updates.module.scss";

import Message from "../../components/Message";

const Updates = () => {
  return (
    <>
      <StarryBackground />
      <div className={styles.container}>
        <Message>
            Nothing to see here... yet.
        </Message>
      </div>
    </>
  );
};

export default Updates;
