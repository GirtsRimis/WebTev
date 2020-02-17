import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Portfolio from './components/Portfolio';

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <LandingPage />
        <AboutUs />
        <Products />
        <Portfolio />
      </div>
    )
  }
}

export default App;