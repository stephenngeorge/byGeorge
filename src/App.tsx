import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

// import child components
import { AboutPage, HomePage, PortfolioPage } from './Components/Pages'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={ HomePage } />
          <Route path='/portfolio' component={ PortfolioPage } />
          <Route path='/about' component={ AboutPage } />
        </div>
      </Router>
    )
  }
}

export default App
