import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Footer from "./components//Footer/Footer";
import TopMenu from './components/Menu/TopMenu'
import routes from './routes';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopMenu />
          <Switch>
            {this.showContentMenus(routes)}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }
    return result;
  }
}
export default App;
