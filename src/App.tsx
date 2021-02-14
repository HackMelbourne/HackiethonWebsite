import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Submission from "./pages/Submission";
import Updates from "./pages/Updates";
import Sponsors from "./pages/Sponsors";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
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
    <Router>
      <div ref={ref}>
        <Background>
          <Navbar />
          <Switch>
            <Route exact path={["/", "/participants"]}>
              <Home pageHeight={pageHeight} />
            </Route>
            <Route path="/updates">
              <Updates />
            </Route>
            <Route path="/sponsors">
              <Sponsors />
            </Route>
            <Route path="/submission">
              <Submission />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route>
              {/* matches any other route: page for 404 error: */}
              <PageNotFound />
            </Route>
          </Switch>
        </Background>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
