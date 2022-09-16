import React from 'react';
import styles from "./Home.module.scss";

import Title from "./Title";

interface Props {
  pageHeight: number;
}

const Home = ({ pageHeight }: Props) => {
  return (
    <>
      <Title />
    </>
  );
};

export default Home;
