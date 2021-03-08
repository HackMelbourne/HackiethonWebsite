import styles from "./Rules.module.scss";

const Rules = () => {
  return (
    <section id="rules" className={styles.rules}>
      <h2>Rules &amp; FAQ</h2>
      <div className={styles.content}>
        <p>The rules are being finalised and will be available soon!</p>
        <table className={styles.table}>
          <tr>
            <td>What is a hackathon?</td>
            <td>
              A hackathon is a design sprint-like competition, in which a team
              of programmers and others including designers and project managers
              collaborate intensively on creative technology projects. The event
              usually lasts from two days up to a week and includes a panel of
              experienced judges.
            </td>
          </tr>
          <tr>
            <td>
              Is there a theme for Hackiethon?
            </td>
            <td>
              Yes! It will be revealed at the start of the event.
            </td>
          </tr>
          <tr>
            <td>Who can participate?</td>
            <td>
              Anyone who is considered a hackathon Rookie is welcome to
              participate in Hackiethon!
            </td>
          </tr>
          <tr>
            <td>Who is considered a 'Rookie'?</td>
            <td>
              Someone who has completed zero or one hackathon at the time of
              sign up during their tertiary education.
            </td>
          </tr>
          <tr>
            <td>
              I've completed more than one hackathon, can I still take part?
            </td>
            <td>
              Yes, however, you will not be eligible for prizes. We do this
              to provide a more accessible and less intimidating experience
              for our participants. If you have experience with Hackathons,
              you can become a mentor and help guide teams towards a
              successful project! More information about mentorship and how
              to sign up coming soon.
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
              <p>
                Yes! If you don’t have a team, hop on over to our Slack to
                connect with others looking for a team.
                {/* Instructions on using
                the Slack can be found <Link to="/slack#">here</Link>. */}
              </p>
              <p>
                If you find a team after you have signed up, you can edit your
                Hackiethon submission by returning the sign up form. If you
                don't find a team by the end of the deadline, no worries! We
                will help you find a team! You will find out about your team a
                couple of days after the deadline closes.
              </p>
            </td>
          </tr>
          <tr>
            <td>I have a partial team, can we stay in the same team?</td>
            <td>
              <p>
                Yes, all you need to do is to find others looking for a team to
                create a complete team of 4! You can do this via the Slack
                #find-a-team channel. Reach out to individuals or advertise your
                team to find new members and create a completed team!
              </p>
              <p>
                Just like above, if you do find a full team before the deadline,
                you can edit your sign up form. Otherwise, we will help you find
                your missing members.
              </p>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Rules;
