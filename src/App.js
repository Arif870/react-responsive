import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Notfound from "./Pages/Notfound/Notfound";
import Topbar from "./Pages/Shered/Navbar/Topbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking/:bookingId">
            <Booking></Booking>
          </Route>
          <Route exact path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
