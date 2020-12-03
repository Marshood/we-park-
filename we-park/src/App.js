import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/register/register';
import Example from './components/register/map'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom"
function App() {
  let history = useHistory();
  return (
    <Router >
    <body className='app'>
 
      <Switch>
      <Route path="/Login">
          <Login />
        </Route>
       
        <Route path="/Register">
          <Register />
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
