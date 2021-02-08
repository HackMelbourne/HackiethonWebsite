import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Updates from "./pages/Updates";

const PageNotFound = () => {
  return (
    <h1 style={{ fontSize: "10rem" }}>404</h1>
  );
}

const App = () => {
  return (
    <Router>
      <Background>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/updates">
            <Updates />
          </Route>
          <Route>
            {/* matches any other route: page for 404 error: */}
            <PageNotFound />
          </Route>
        </Switch>
      </Background>
    </Router>
  );
};

export default App;
