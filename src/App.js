import "./App.scss";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

document.title = "BrainFlix";

class App extends Component {
  state = {
    isUploaded: false,
  };

  // CREATE A FUNCTION TO CHANGE THE STATE OF ISUPLOADED FROM FALSE TO TRUE

  handleUpload() {
    this.setState = {
      isUploaded: true,
    };
  }

  // PASS IT INTO THE UPLOADED PAGE AS PROPS

  render() {
    return (
      <Router>
        <Header />
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
            component={Upload}
            // render={(props) => {
            //   // <Upload handleUpload={this.handleUpload} />;
            // }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
