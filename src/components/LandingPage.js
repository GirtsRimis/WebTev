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
          <Navbar
            href1={this.props.href1}
            href2={this.props.href2}
            href3={this.props.href3}
            href4={this.props.href4}
          />
          <Header/>
        </div>      
      )
    }
}

export default LandingPage