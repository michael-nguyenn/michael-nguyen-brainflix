import "./App.scss";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

document.title = "BrainFlix";

class App extends Component {
  // SETTING INITIAL STATE
  state = {
    isUploaded: false,
  };

  // CREATE A FUNCTION TO TOGGLE THE STATE OF ISUPLOADED FROM FALSE TO TRUE
  handleUpload = () => {
    this.setState({
      isUploaded: !this.state.isUploaded,
    });
  };

  render() {
    return (
      <Router>
        <HeaderComponent />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <Home {...routerProps} isUploaded={this.state.isUploaded} />
            )}
          />
          <Route path="/videos/:id" component={Home} />
          <Route
            path="/upload"
            render={(routerProps) => (
              <Upload {...routerProps} handleUpload={this.handleUpload} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
