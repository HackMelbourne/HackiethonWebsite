import styles from "./Resources.module.scss";
import astronaut1 from "../../../assets/astronaut-participants.svg";
import astronaut2 from "../../../assets/astronaut-mentors.svg";
import astronaut3 from "../../../assets/astronaut-judges.svg";

import { HashLink as Link } from "react-router-hash-link";

interface Props {
  title: string;
  description: string;
  to: string;
  img: JSX.Element;
  // ^ almost the same as React.ReactNode except it doesn't allow
  // plain strings/numbers, only JSX elements
}

const Pack = ({ title, description, to, img }: Props) => {
  return (
    <div className={styles.pack}>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <div className={styles.imgContainer}>{img}</div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} to={to}>
          DOWNLOAD
        </Link>
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <section id="resources" className={styles.resources}>
      <h2>Resources</h2>
      {/* <div className={styles.packs}>
        <Pack
          title="Participants"
          description="Participants Resources Pack"
          to={"/participants-pack#"}
          img={<img src={astronaut1} alt="blue astronaut face" />}
        />
        <Pack
          title="Mentors"
          description="Mentors Resources Pack"
          to={"/mentors-pack#"}
          img={<img src={astronaut2} alt="purple astronaut face" />}
        />
        <Pack
          title="Judges"
          description="Judges Resources Pack"
          to={"/judges-pack#"}
          img={<img src={astronaut3} alt="orange astronaut face" />}
        />
      </div> */}
      <div className={styles.comingSoonContainer}>
        <div className={styles.comingSoon}>
          <h2>Coming soon!</h2>
        </div>
      </div>
    </section>
  );
};

export default Resources;
