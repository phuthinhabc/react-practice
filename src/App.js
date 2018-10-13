import React, { Component } from 'react';
import './App.css';
import { HashRouter, BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'mobx-react';
import SidebarStorage from './stores/MySideBarStorage';
import DashboardStorage from './stores/MyDashboardStorage';

import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Provider mySidebarStorage={SidebarStorage} myDashboardStorage={DashboardStorage}>
            <HashRouter hashType={'noslash'}>
              <Container />      
            </HashRouter>
          </Provider>
        </div>
      </Router>
    );
  }
}

export default App;
