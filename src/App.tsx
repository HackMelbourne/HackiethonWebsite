import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
