import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

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
        <Contacts />
        <Footer />
      </div>
    )
  }
}

export default App;