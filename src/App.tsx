import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Event from "./views/Event";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/event/:title" component={Event}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
