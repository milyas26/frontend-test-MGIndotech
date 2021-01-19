import "./App.css";
import { Home, Favourite } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favourite" component={Favourite} />
      </Switch>
    </Router>
  );
}

export default App;
