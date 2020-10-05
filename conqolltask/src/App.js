import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import All from './components/pages/All';
import Shortlisted from './components/pages/Shortlisted';
import Home from './components/pages/Home';
import Try from './components/pages/Try';
import Test from './components/pages/Test';
import Tablee from './components/pages/Tablee';
import Lcp from './components/pages/Lcp';
import MultipleActions from './components/pages/Delete';
import Allclass from './components/pages/Allclass';
import Ui from './components/pages/Ui';
import Pasta from './components/pages/Pasta';




class App extends Component {
  
  render() {
    return (
      
      
      <Router>


        <div className="App">
          <Navbar />
        </div>
        
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>

        <br />
        <br />

        <Switch>
          <Route exact path='/all' component={All} />
        </Switch>
        

        <Switch>
          <Route exact path='/shortlisted' component={Shortlisted} />
        </Switch>

  
      </Router>
    );
  }
}
export default App;
