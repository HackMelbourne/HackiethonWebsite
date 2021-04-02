import styles from "./Videos.module.scss";

import ReactPlayer from "react-player/youtube";
import optiverVideo from "../../../assets/videos/optiver_video.mp4";

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
            <video width="100%" height="100%" src={optiverVideo} controls />
          </div>
          <div>
            <h3>Optiver</h3>
            <p>
              At Optiver, we improve the market. We're a self-funded
              market-making firm, dedicated to having a positive impact on
              the world's markets. We harness the power of extraordinary
              talent and give our people interesting problems to solve in a
              collaborative, high-performing environment.
            </p>
            <p>
              We're looking for bright, ambitious solution-seekers. We want the
              people who love thinking through (and talking over) a big, chewy
              problem. Our business was built on finding talent, and giving them
              autonomy, responsibility and the support they need to make an
              impact, right from day one. We're an energetic crew, combining a
              range of backgrounds and specialisation into a whole that's
              definitely more than the sum of its parts. More information {" "}
              <LinkInNewTab href={"https://www.optiver.com/working-at-optiver/"}>
                here
              </LinkInNewTab>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
