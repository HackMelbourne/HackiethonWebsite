import { StarryBackground } from "../../components/SpaceScene";
import styles from "./Error.module.scss";

import Message from "../../components/Message";

const Error = () => {
  return (
    <>
      <StarryBackground />
      <div className={styles.container}>
        <Message>
            Page not found...
        </Message>
      </div>
    </>
  );
};

export default Error;
