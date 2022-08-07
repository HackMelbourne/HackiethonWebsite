import { useEffect, useRef, useState } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

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
    <div ref={ref}>
      <Background>
        {/* <Navbar /> */}
          <Home pageHeight={pageHeight} />
      </Background>
      <Footer />
    </div>
  );
};

export default App;
