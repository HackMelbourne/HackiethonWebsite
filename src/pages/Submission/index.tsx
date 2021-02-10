import { StarryBackground } from "../../components/SpaceScene";
import styles from "./Submission.module.scss";

import Message from "../../components/Message";

const Submission = () => {
  return (
    <>
      <StarryBackground />
      <div className={styles.container}>
        <Message>
          Nothing to see here <br/> until hackathon starts!
        </Message>
      </div>
    </>
  );
};

export default Submission;
