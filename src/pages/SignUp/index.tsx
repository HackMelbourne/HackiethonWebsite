import { StarryBackground } from "../../components/SpaceScene";
import styles from "./SignUp.module.scss";

import Message from "../../components/Message";

const SignUp = () => {
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

export default SignUp;
