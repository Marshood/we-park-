import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/register/register";
import Example from "./components/Map";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Nav from "./components/NavBar/index";
import Timer from "./components/Timer/Timer";
import Reservation from "./components/Reservation/Reservation";
function App() {
  let history = useHistory();

  return (
    <Router>
      <body className="app">
        <div className="appContent">
          <Switch>
            <Route path="/Timer">
              <Timer />
            </Route>
            {/* <Route path="/SideBar">
              <NavBar />
            </Route> */}

            <Route path="/Register">
              <Register />
            </Route>

            <Route path="/Profile">
              <Profile />
            </Route>

            <Route path="/Reservation">
              <Reservation />
            </Route>

            <Route path="/">
              <Example />
            </Route>

          </Switch>
          <div className="bottomNav">
          <Nav />
        </div>
        </div>
       
      </body>
    </Router>
  );
}

export default App;
