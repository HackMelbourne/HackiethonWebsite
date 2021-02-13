import styles from "./Schedule.module.scss";

// FIXME: hard-coded for now
const Schedule = () => {
  return (
    <section id="schedule" className={styles.schedule}>
      <h2>Event Schedule</h2>
      <div className={styles.timetable}>
        <table>
          <tbody>
            <tr>
              <th scope="row" rowSpan={2}>
                FRIDAY
              </th>
              <td>8 PM</td>
              <td>Opening ceremony</td>
            </tr>
            <tr className={styles.bottomBorder}>
              <td>9 PM</td>
              <td>Mentor Introduction &amp; Mandatory First Mentor Check-in</td>
            </tr>
            <tr>
              <th scope="row" rowSpan={6}>
                SATURDAY
              </th>
              <td>10 AM</td>
              <td>GitHub Workshop</td>
            </tr>
            <tr>
              <td>11 AM</td>
              <td>HTML &amp; CSS Workshop</td>
            </tr>
            <tr>
              <td>12:30 PM</td>
              <td>Lunch Break</td>
            </tr>
            <tr>
              <td>1:30 PM</td>
              <td>React.js Workshop</td>
            </tr>
            <tr>
              <td>2 PM</td>
              <td>APIs Workshop</td>
            </tr>
            <tr className={styles.bottomBorder}>
              <td>4:30 PM</td>
              <td>Second Mentor Check-in</td>
            </tr>
            <tr className={styles.bottomBorder}>
              <th scope="row" rowSpan={1}>
                SUNDAY
              </th>
              <td>4:30 PM</td>
              <td>Third Mentor Check-in</td>
            </tr>
            <tr>
              <th scope="row" rowSpan={5}>
                MONDAY
              </th>
              <td>8 AM</td>
              <td>Submissions Due</td>
            </tr>
            <tr>
              <td>9 AM</td>
              <td>Judge Onboarding</td>
            </tr>
            <tr>
              <td>9:30 AM</td>
              <td>Judge Deliberation</td>
            </tr>
            <tr>
              <td>4 PM</td>
              <td>Results Confirmation</td>
            </tr>
            <tr className={styles.bottomBorder}>
              <td>4 PM</td>
              <td>Closing Ceremony</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
