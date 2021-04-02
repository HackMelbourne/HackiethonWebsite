import styles from "./Schedule.module.scss";
import satellite from "../../../assets/satellite.svg";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  href: string;
}

const ZoomLink = ({ href }: Props) => (
  <a
    className={styles.zoomLink}
    href={href}
    title="Zoom Link"
    target="_blank"
    rel="noopener noreferrer"
  >
    Zoom <FaExternalLinkAlt />
  </a>
);

const WorkshopsSchedule = (
  <>
    <tr>
      <td>Mar 29</td>
      <td>4:00PM - 5:00PM</td>
      <td>Workshop #1: Github</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/85193855181?pwd=WVBqQ1Y2WE9HWXZZMExhUzhxaDdQdz09" />
      </td>
    </tr>
    <tr>
      <td>Mar 30</td>
      <td>4:00PM - 5:30PM</td>
      <td>Workshop #2: HTML/CSS</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/89473993015?pwd=Rk5JQzlvVUsvbmhpelNMMDM5U2JQUT09" />
      </td>
    </tr>
    <tr>
      <td>Mar 31</td>
      <td>4:00PM - 5:30PM</td>
      <td>Workshop #3: API for Beginners</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/82252533524?pwd=ckthMnhtZlFqTGQ2LzNlQ25wdUs0UT09" />
      </td>
    </tr>
  </>
);

const FridaySchedule = (
  <>
    <tr>
      <td>8:00PM - 8:45PM</td>
      <td>Opening Ceremony</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/88443841469?pwd=dGJ2dDZ5TFBjdUNscUozZE9VNkNrZz09" />
      </td>
    </tr>
  </>
);

const SaturdaySchedule = (
  <>
    <tr>
      <td>10:00AM - 12:00PM</td>
      <td>Booked individual team check-ins #1</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>2:00PM - 4:00PM</td>
      <td>Mentor assistance window #1</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>8:00PM - 10:00PM</td>
      <td>Social event #1: Scavenger Hunt</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/85640211419?pwd=UHZpclZlbVE2bVhIYlJNWkZSc0F1Zz09" />
      </td>
    </tr>
  </>
);

const SundaySchedule = (
  <>
    <tr>
      <td>10:00AM - 12:00PM</td>
      <td>Mentor assistance window #2</td>
      <td>
      </td>
    </tr>
    {/* <tr>
      <td>1:00PM - 2:00PM</td>
      <td>Networking event</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/84932847307?pwd=bi9kRWF2T2NYMjcrUVFnK2d4R1BEUT09" />
      </td>
    </tr> */}
    <tr>
      <td>2:00PM - 4:00PM</td>
      <td>Mentor assistance window #3</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>4:00PM - 6:00PM</td>
      <td>Booked individual team check-ins #2</td>
      <td>
      </td>
    </tr>
    <tr>
      <td>8:00PM - 9:30PM</td>
      <td>Social event #2: Skribblio</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/87323179936?pwd=YU00bzBnUkRhbXBMK05WQVBlYmtldz09" />
      </td>
    </tr>
  </>
);

const MondaySchedule = (
  <>
    <tr>
      <td>1:00PM - 2:00PM</td>
      <td>Social event #3: Zoom breakout rooms</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/82462283108?pwd=Rkk3cnJEN3FLWFB4bFZaQmxYMGoxQT09" />
      </td>
    </tr>
    <tr>
      <td>8:00PM - 9:00PM</td>
      <td>Closing Ceremony</td>
      <td>
        <ZoomLink href="https://unimelb.zoom.us/j/82276023280?pwd=RjBsS0swbEE1TGxXT1d2K3g4ak9pZz09" />
      </td>
    </tr>
  </>
);

const Schedule = () => {
  const [selected, setSelected] = useState("Workshops");
  const schedules: { [selection: string]: JSX.Element } = {
    Workshops: WorkshopsSchedule,
    Friday: FridaySchedule,
    Saturday: SaturdaySchedule,
    Sunday: SundaySchedule,
    Monday: MondaySchedule,
  };

  // nasty, but it will do
  return (
    <section id="schedule" className={styles.schedule}>
      <h2>Event Schedule</h2>
      <div className={styles.content}>
        <div className={styles.timetable}>
          <div className={styles.buttons}>
            <button
              onClick={() => setSelected("Workshops")}
              className={`${styles.button} ${
                selected === "Workshops" ? styles.selected : ""
              }`}
            >
              WORKSHOPS
            </button>
            <button
              onClick={() => setSelected("Friday")}
              className={`${styles.button} ${
                selected === "Friday" ? styles.selected : ""
              }`}
            >
              FRIDAY 2ND
            </button>
            <button
              onClick={() => setSelected("Saturday")}
              className={`${styles.button} ${
                selected === "Saturday" ? styles.selected : ""
              }`}
            >
              SATURDAY 3RD
            </button>
            <button
              onClick={() => setSelected("Sunday")}
              className={`${styles.button} ${
                selected === "Sunday" ? styles.selected : ""
              }`}
            >
              SUNDAY 4TH
            </button>
            <button
              onClick={() => setSelected("Monday")}
              className={`${styles.button} ${
                selected === "Monday" ? styles.selected : ""
              }`}
            >
              MONDAY 5TH
            </button>
          </div>
          <table>
            <tbody>
              {schedules[selected]}
            </tbody>
          </table>
        </div>
        <div className={styles.satellite}>
          <img src={satellite} alt="satellite" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
