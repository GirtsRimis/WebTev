import React from 'react';
import LandingPage from './components/LandingPage';
import './App.css';
import AboutUs from './components/AboutUs'

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <LandingPage />
        <AboutUs />
      </div>      
    )
  }
}

export default App;