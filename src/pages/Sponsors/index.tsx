import { StarryBackground } from "../../components/SpaceScene";
import List from "./List";
import Videos from "./Videos";

import Message from "../../components/Message";
import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  return (
    <>
      <StarryBackground/>
      <List />
      {/* <Videos /> */}
    </>
  );
};

// const SponsorsTemp = () => {
//   return (
//     <>
//       <StarryBackground />
//       <div className={styles.container}>
//         <Message>
//           Coming soon!
//         </Message>
//       </div>
//     </>
//   );
// };

export default Sponsors;
