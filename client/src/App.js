import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Detail from "./components/Detail"
import Create from "./components/Create"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div>INICIO</div>
        </Route>
        <Route>
          <NavBar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/create" component={Create} />
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
