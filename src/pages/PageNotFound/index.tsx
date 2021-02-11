import { StarryBackground } from "../../components/SpaceScene";
import styles from "./PageNotFound.module.scss";

import Message from "../../components/Message";

const PageNotFound = () => {
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

export default PageNotFound;
