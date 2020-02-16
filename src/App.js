import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs'
import Products from './components/Products'

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <LandingPage />
        <AboutUs />
        <Products />
      </div>      
    )
  }
}

export default App;