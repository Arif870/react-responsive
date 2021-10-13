import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Notfound from "./Pages/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
