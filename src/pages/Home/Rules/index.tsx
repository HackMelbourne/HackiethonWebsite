import styles from "./Rules.module.scss";

const Rules = () => {
  return (
    <section id="rules" className={styles.rules}>
      <h2>Rules &amp; FAQ</h2>
      <div className={styles.content}>
        <p>
          The rules are being finalised and will be available soon!
        </p>
        <table className={styles.table}>
          <tr>
            <td>Who can participate?</td>
            <td>All current university students who are considered Rookies!</td>
          </tr>
          <tr>
            <td>Who is considered a Rookie?</td>
            <td>
              Someone who has completed zero or one hackathon at the time of
              sign up during their tertiary education.
            </td>
          </tr>
          <tr>
            <td>Can I participate if I'm not a Rookie?</td>
            <td>
              Unfortunately you will not be eligible to participate. However,
              you can become a mentor and help guide teams towards a
              successful project! More information about mentorship can be
              found here.
            </td>
          </tr>
          <tr>
            <td>How much does it cost?</td>
            <td>
              Hackiethon is completely free! We want to make this accessible to
              everyone so there is absolutely no cost involved, and lots of
              perks for joining!
            </td>
          </tr>
          <tr>
            <td>How many people can be in a team?</td>
            <td>A team must be comprised of 4 members.</td>
          </tr>
          <tr>
            <td>I don’t have a team, can I sign up as an individual?</td>
            <td>
              Yes! If you don’t have a team, hop on over to our Slack to connect
              with others looking for a team. Instructions on using the Slack
              can be found here (link to Slack instructions)
            </td>
          </tr>
          <tr>
            <td>I have a partial team, can we stay in the same team?</td>
            <td>
              Yes, all you need to do is to find others looking for a team to
              create a complete team of 4! You can do this via the Slack
              #find-a-team channel. Reach out to individuals or advertise your
              team to find new members and create a completed team!
            </td>
          </tr>
          {/* <tr>
            <td>
              What is the theme?
            </td>
            <td>
              It's a secret! 
            </td>
          </tr> */}
        </table>
      </div>
    </section>
  );
};

export default Rules;
