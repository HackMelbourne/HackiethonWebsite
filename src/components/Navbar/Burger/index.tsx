import React from 'react';
import styles from "./Burger.module.scss";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({ open, setOpen }: Props) => {
  // the three empty div's are the bars that make up the burger
  return (
    <div className={styles.burgerWrapper}>
      <div
        className={`${styles.burger} ${open ? styles.open : styles.closed}`}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Burger;
