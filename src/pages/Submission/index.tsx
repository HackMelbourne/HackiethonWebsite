import { StarryBackground } from "../../components/SpaceScene";
import styles from "./Submission.module.scss";

import Message from "../../components/Message";

// https://www.notion.so/How-to-Submit-5e06dc11c52b4034a0d8f249540a77ba

import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  href: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, children }: Props) => (
  <a
    className={styles.externalLink}
    href={href}
    title="Zoom Link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children} <FaExternalLinkAlt />
  </a>
);

const Submission = () => {
  // reject abstraction, return to plain p's and ul's
  return (
    <>
      <StarryBackground />
      <div className={styles.container}>
        <section id="submission" className={styles.container}>
          <h2 className={styles.title}>Submission Instructions</h2>
          <p>
            The submission guide is also available on{" "}
            <ExternalLink href="https://www.notion.so/How-to-Submit-5e06dc11c52b4034a0d8f249540a77ba">
              the Hacker's Guide
            </ExternalLink>
            .
          </p>
          <p>
            <strong>
              Even if you haven’t completed your project by the submission
              deadline, you can still submit what you’ve done and be considered
              for prizes!
            </strong>
          </p>
          <h2>Schedule</h2>
          <Schedule />
          <p>
            This year, submission of your hackathon projects will be done on
            DevPost. DevPost is a platform that allows you to connect with other
            participants and browse other team’s submissions. You’re encouraged
            to like and comment on any submissions you enjoy! Submission
            involves three main artefacts:
          </p>
          <ul>
            <li>A video demo</li>
            <li>Your website</li>
            <li>A brief paragraph explaining your submission</li>
          </ul>
          <h2>The Video Demo</h2>
          <p>
            The video will act as a walkthrough of your site to help guide
            judges through your project. Please note that the video will not be
            marked. We recommend screen-recording a Zoom meeting and
            screen-sharing your website. To submit your video, please upload it
            onto Youtube (you may do this as a private video), and insert the
            video share link when prompted on the submission page. The video may
            also be uploaded from a Facebook Video, Vimeo or YouKu URL.
          </p>
          <h2>The Paragraph (100 - 150 words)</h2>
          <p>
            The paragraph will be your explanation behind how your project
            addresses your team's chosen problem theme. While the paragraph will
            not be explicitly marked, it will act as a primary guide for judges
            in their interpretation of your project.. This will be submitted in
            the ‘About the Project’ section of the submission page.
          </p>
          <p>Some topics you could discuss are:</p>
          <ul>
            <li>
              Your teams inspiration behind the project and why you chose your
              particular theme
            </li>
            <li>What your teams project does</li>
            <li>What problem your team are addressing</li>
            <li>Any challenges that your team had to overcome</li>
            <li>What your team is most proud of</li>
          </ul>
          <h2>The Website</h2>
          <p>
            The website is your judged project for the hackathon. More
            information about this can be found in the Theme Reveal document.
          </p>
          <h2>Instructions for Submitting</h2>
          <p>
            To see the pictures detailing the steps, refer to{" "}
            <ExternalLink href="https://www.notion.so/How-to-Submit-5e06dc11c52b4034a0d8f249540a77ba">
              the Hacker's guide on Notion
            </ExternalLink>
            .
          </p>
          <div className={styles.instructions}>
            <table>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>
                    Go to the{" "}
                    <ExternalLink href="https://hackiethon.devpost.com/">
                      Hackiethon Devpost{" "}
                    </ExternalLink>
                    .
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>
                    At least one member of your team will need to create a
                    DevPost account (It is recommended that each team member
                    does this so that your name will be displayed on your
                    project submission).
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Head to ‘My Projects’ &gt;&gt; ‘Create Project’</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>
                    Name your project as follows: ‘[PROJECT NAME] by [TEAM
                    NAME]’ (Eg. Productivity Timer by The Hackies)
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>
                    Complete the prompts and questions as a team. Please note
                    that these answers will not be marked, and will just be used
                    as a guide for judges.
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Type the paragraph under ‘About your project’</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>
                    Insert the link to your website in the “Try it out” link
                    prompt.
                  </td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>Submit your video demo under ‘Video demo link’</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>
                    Continue through the prompts, and then submit your project.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

const Schedule = () => {
  return (
    <div className={styles.timetableContainer}>
      <div className={styles.timetable}>
        <table>
          <tbody>
            <tr className={styles.bottomBorder}>
              <td>Friday 2nd April</td>
              <td>8:00PM</td>
              <td>Submissions open</td>
            </tr>
            <tr>
              <td>Monday 4th April</td>
              <td>8:00AM</td>
              <td>Submissions close</td>
            </tr>
            <tr className={styles.bottomBorder}>
              <td></td>
              <td>8:00PM</td>
              <td>Winning Teams Announced</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SubmissionTemp = () => {
  return (
    <>
      <StarryBackground />
      <div className={styles.tempContainer}>
        <Message>
          Nothing to see here <br /> until hackathon starts!
        </Message>
      </div>
    </>
  );
};

export default Submission;
