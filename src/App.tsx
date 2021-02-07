import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Background from "./components/Background/Background";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Background>
        <NavigationBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Background>
    </Router>
  );
};

export default App;
