import styles from ".././Navbar.module.scss";
import rocket from "../../../assets/rocket_2022.svg";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={rocket} height="60px" alt="rocket" />
            <div>
                <div className={styles.text}>Hackie</div>
                <div className={styles.subtext}>thon</div>
            </div>
        </div>
    );
};

export default Logo;