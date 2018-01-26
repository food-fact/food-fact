import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';
import Battle from './Battle';
import Lookup from './Lookup';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/battle">Battle</Link></li>
            <li><Link to="/lookup">Lookup</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/battle" component={Battle}/>
          <Route path="/lookup" component={Lookup}/>
        </div>
      </Router>
    );
  }
}

export default App;
