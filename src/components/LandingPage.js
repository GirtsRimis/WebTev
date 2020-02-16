import React, { Component } from 'react'
import './sass/LandingPage.sass'
import Header from './Header'
import Navbar from './Navbar'

export class LandingPage extends Component 
{
    render()
    {
      return (
        <div className="picture">
          <Navbar/>
          <Header/>
        </div>      
      )
    }
}

export default LandingPage