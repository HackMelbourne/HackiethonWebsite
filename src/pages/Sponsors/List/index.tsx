import styles from "./List.module.scss";
import logo from "../../../assets/hm-logo-dark.svg";

interface CompanyProps {
  src: string;
  name: string;
  href: string;
}

const Company = ({ src, name, href }: CompanyProps) => {
  return (
    <div className={styles.company}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={name} />
      </a>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

interface TierProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Tier = ({ title, children }: TierProps) => {
  return (
    <section className={styles.tier}>
      <h3 className={styles.tierTitle}>{title}</h3>
      <div className={styles.companies}>{children}</div>
    </section>
  );
};

const List = () => {
  return (
    <section id="list" className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>HACKIEthon</span> 2021 Sponsors
      </h2>
      <Tier title="Diamond Sponsors">
        <Company src={logo} name="Company name" href="https://www.google.com" />
      </Tier>
      <Tier title="Platinum Sponsors">
        <Company src={logo} name="Company name" href="https://www.google.com" />
        <Company src={logo} name="Company name" href="https://www.google.com" />
        <Company src={logo} name="Company name" href="https://www.google.com" />
      </Tier>
      <Tier title="Gold Sponsors">
        <Company src={logo} name="Company name" href="https://www.google.com" />
        <Company src={logo} name="Company name" href="https://www.google.com" />
        <Company src={logo} name="Company name" href="https://www.google.com" />
        <Company src={logo} name="Company name" href="https://www.google.com" />
        <Company src={logo} name="Company name" href="https://www.google.com" />
        <Company src={logo} name="Company name" href="https://www.google.com" />
        <Company src={logo} name="Company name" href="https://www.google.com" />
      </Tier>
      <div className={styles.interestedMessage}>
        Interested? Visit the{" "}
        <a
          href="https://hackmelb.org"
          title="HackMelbourne's Sponsorship page"
          target="_blank"
          rel="noopener noreferrer"
        >
          HackMelbourne Sponsorship page
        </a>{" "}
        to get involved!
      </div>
    </section>
  );
};

export default List;
