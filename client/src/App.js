import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Detail from "./components/Detail/Detail"
import Create from "./components/Create/Create"
import Start from "./components/Start/Start"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Start}>
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
