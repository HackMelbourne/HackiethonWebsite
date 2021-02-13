import styles from "./Resources.module.scss";
import astronaut1 from "../../../assets/astronaut-participants.svg";
import astronaut2 from "../../../assets/astronaut-mentors.svg";
import astronaut3 from "../../../assets/astronaut-judges.svg";

interface Props {
  title: string;
  description: string;
  img: JSX.Element;
  // ^ almost the same as React.ReactNode except it doesn't allow
  // plain strings/numbers, only JSX elements
}

const Pack = ({ title, description, img }: Props) => {
  return (
    <div className={styles.pack}>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <div className={styles.imgContainer}>{img}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>DOWNLOAD</button>
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <section id="resources" className={styles.resources}>
      <h2>Resources</h2>
      <div className={styles.packs}>
        <Pack
          title="Participants"
          description="Participants Resources Pack"
          img={<img src={astronaut1} alt="blue astronaut face" />}
        />
        <Pack
          title="Mentors"
          description="Mentors Resources Pack"
          img={<img src={astronaut2} alt="purple astronaut face" />}
        />
        <Pack
          title="Judges"
          description="Judges Resources Pack"
          img={<img src={astronaut3} alt="orange astronaut face" />}
        />
      </div>
    </section>
  );
};

export default Resources;
