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
        <LandingPage 
          href1="#about"
          href2="#products"
          href3="#portfolio"
          href4="#contacts"
        />
        <AboutUs id="about"/>
        <Products id="products"/>
        <Portfolio id="portfolio"/>
        <Contacts id="contacts"/>
        <Footer />
      </div>
    )
  }
}

export default App;