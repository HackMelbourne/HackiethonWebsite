import React, { useEffect, useRef, useState } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  // getting the total page height is effectful, this is needed for Scroll
  const [pageHeight, setPageHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current !== null) {
      setPageHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <Router>
      <div ref={ref}>
        <Background>
          <Navbar />
          <Home pageHeight={pageHeight} />
        </Background>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
