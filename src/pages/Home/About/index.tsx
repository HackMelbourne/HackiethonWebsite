import styles from "./About.module.scss";

interface Props {
  children: string;
}

const Highlight = ({ children }: Props) => (
  <span className={styles.highlight}>{children}</span>
);

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>
        About <Highlight>Hackiethon 2021</Highlight>
      </h2>
      <div className={styles.content}>
        <p>
          Are you a student who is new to the tech hackathon scene?
          Introducing the{" "}
          <strong>
            <Highlight>Hackiethon</Highlight>
          </strong>
          , a hackathon catered specially for rookies. We’ve removed some of the
          barriers of joining hackathons to help you experience the
          enjoyment and learning of a hackathon in a beginner-friendly
          environment!
        </p>
        <p>
          <Highlight>Hackiethon 2021</Highlight> will run{" "}
          <Highlight>online</Highlight> on the{" "}
          <Highlight>2nd - 5th April</Highlight>. Sign up as a complete team, or
          individually where you can form a team with other keen hackers to
          create a website or a web app over a weekend! There will be regular
          mentor check-ins, workshops and guides to teach you all the skills you
          need and guide your team through the project ideation and creation
          process.
        </p>
      </div>
    </section>
  );
};

export default About;
