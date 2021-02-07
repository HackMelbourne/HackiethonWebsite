import styles from "./Background.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Background = ({children}: Props) => {
  return (
    <main className={styles.background}>
      {children}
    </main>
  );
}

export default Background;