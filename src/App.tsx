import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

// import child components
import { HomeButton, Navigation } from './Components/Globals'
import { AboutPage, HomePage, PortfolioPage } from './Components/Pages'

export default () => (
  <Router>
    <div className="App">
      <HomeButton />
      <Navigation />

      <Route exact path='/' component={ HomePage } />
      <Route path='/portfolio' component={ PortfolioPage } />
      <Route path='/about' component={ AboutPage } />
    </div>
  </Router>
)