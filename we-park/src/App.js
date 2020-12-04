import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/register/register";
import Example from "./components/register/map";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
function App() {
  let history = useHistory();
  return (
    <Router>
      <body className="app">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>

          <Route path="/">
            <Example />
          </Route>
        </Switch>
      </body>
    </Router>
  );
}

export default App;
