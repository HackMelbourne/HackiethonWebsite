import React from 'react';

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
