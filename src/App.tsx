import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Navigation from './Components/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App
