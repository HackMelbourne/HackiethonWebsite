import styles from "./About.module.scss";

interface Props {
  children: string;
}

const Highlight1 = ({ children }: Props) => (
  <span className={styles.highlight1}>{children}</span>
);

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>
        About <Highlight1>Hackiethon 2021</Highlight1>
      </h2>
      <div className={styles.content}>
        <p>
          Are you new to University or have never done a hackathon before?
          Introducing the{" "}
          <strong>
            <Highlight1>Hackiethon</Highlight1>
          </strong>
          , a hackathon catered specially for rookies. We’ve removed some of the
          primary barriers of joining hackathons to help you experience the
          enjoyment and learning of a hackathon in a comfortable environment
          where you’re surrounded by people in the same boat as you!
        </p>
        <p>
          <Highlight1>Hackiethon 2021</Highlight1> will run online on the{" "}
          <Highlight1>2nd - 5th April</Highlight1>. Sign up as a complete team,
          or individually where you can form a team with other keen hackers
          to create a website or a web app over a weekend! There will be
          regular mentor check-ins, workshops and guides to teach you all the
          skills you need and guide your team through the project ideation
          and creation process.
        </p>
      </div>
    </section>
  );
};

export default About;
