import "./App.scss";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/videos/:id" component={Home} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
