import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRouting from "./Pages/Login/PrivateRoute/PrivateRouting";
import Notfound from "./Pages/Notfound/Notfound";
import Topbar from "./Pages/Shered/Navbar/Topbar";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRouting path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRouting>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <Notfound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
