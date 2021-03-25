import styles from "./Schedule.module.scss";
import satellite from "../../../assets/satellite.svg";

// FIXME: hard-coded for now
const Schedule = () => {
  return (
    <section id="schedule" className={styles.schedule}>
      <h2>Event Schedule</h2>
      <div className={styles.content}>
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
                <td>
                  Mentor Introduction &amp; Mandatory First Mentor Check-in
                </td>
              </tr>
              <tr className={styles.bottomBorder}>
                <th scope="row" rowSpan={1}>
                  SATURDAY
                </th>
                <td>4.30 PM - 6 PM</td>
                <td>Social Night</td>
              </tr>
              <tr className={styles.bottomBorder}>
                <th scope="row" rowSpan={1}>
                  SUNDAY
                </th>
                <td>4:30 PM - 6 PM</td>
                <td>Second Mentor Check-in</td>
              </tr>
              <tr>
                <th scope="row" rowSpan={3}>
                  MONDAY
                </th>
                <td>8 AM</td>
                <td>Submissions Due</td>
              </tr>
              <tr>
                <td>9:30 AM - 4 PM</td>
                <td>Judging</td>
              </tr>
              <tr className={styles.bottomBorder}>
                <td>8 PM</td>
                <td>Closing Ceremony</td>
              </tr>
            </tbody>
          </table>
          {/* <div className={styles.buttons}>
            <button className={styles.button}>PARTICIPANTS</button>
            <button className={styles.button}>MENTORS</button>
            <button className={styles.button}>JUDGES</button>
          </div> */}
        </div>
        <div className={styles.satellite}>
          <img src={satellite} alt="satellite" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
