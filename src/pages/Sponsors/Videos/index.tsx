import styles from "./Videos.module.scss";

import ReactPlayer from "react-player/youtube";
import video1 from "../../../assets/videos/sample.mp4";

interface Props {
  href: string;
  children: string;
}

const LinkInNewTab = ({ href, children }: Props) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Videos = () => {
  return (
    <section id="videos" className={styles.container}>
      <h2>Sponsor Video Features</h2>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.video}>
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=BggrpKfqh1c"
              controls={true}
            />
          </div>
          <h3>Company Name</h3>
          <p>
            More information{" "}
            <LinkInNewTab href="https://bit.ly/company_link">here</LinkInNewTab>
            .
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.video}>
            <video width="100%" height="100%" src={video1} controls />
          </div>
          <h3>Company Name</h3>
          <p>
            More information{" "}
            <LinkInNewTab href="https://bit.ly/company_link">here</LinkInNewTab>
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.video}>
            <video width="100%" height="100%" src={video1} controls />
          </div>
          <h3>Company Name</h3>
          <p>
            More information{" "}
            <LinkInNewTab href="https://bit.ly/company_link">here</LinkInNewTab>
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.video}>
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=BggrpKfqh1c"
              controls={true}
            />
          </div>
          <h3>Company Name</h3>
          <p>
            More information{" "}
            <LinkInNewTab href="https://bit.ly/company_link">here</LinkInNewTab>
            .
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.video}>
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=BggrpKfqh1c"
              controls={true}
            />
          </div>
          <h3>Company Name</h3>
          <p>
            More information{" "}
            <LinkInNewTab href="https://bit.ly/company_link">here</LinkInNewTab>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Videos;
