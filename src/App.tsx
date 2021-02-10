import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Submission from "./pages/Submission";
import Updates from "./pages/Updates";
import Sponsors from "./pages/Sponsors";

const PageNotFound = () => {
  return <h1 style={{ fontSize: "10rem" }}>404</h1>;
};

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
          <Switch>
            <Route exact path="/">
              <Home pageHeight={pageHeight} />
            </Route>
            <Route path="/updates">
              <Updates />
            </Route>
            <Route path="/submission">
              <Submission />
            </Route>
            <Route path="/sponsors">
              <Sponsors />
            </Route>
            <Route>
              {/* matches any other route: page for 404 error: */}
              <PageNotFound />
            </Route>
          </Switch>
        </Background>
      </div>
    </Router>
  );
};

export default App;
