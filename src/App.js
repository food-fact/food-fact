import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Taco from './Taco';
import Lookup from './Lookup';


class App extends Component {
  render() {
    return (
      <Router basename="/food-fact">
        <div className="app">
          <div className="header">
            <div className="header_content">
              <h1>Tacos and Lookup</h1>
              <ul>
                <li><Link to="/Taco">Taco</Link></li>
                <li><Link to="/lookup">Lookup</Link></li>
              </ul>
            </div>
          </div>

          <div className="content">
            <Route exact path="/Taco" component={Taco}/>
            <Route path="/lookup" component={Lookup}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
