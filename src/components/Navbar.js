import React, { Component } from 'react'
import './sass/Navbar.sass'
import logo from './images/logo_transparent.png';
import dropdown from './images/dropdown.png'

export class Navbar extends Component 
{

    myFunction = () =>
    {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    } 

    render() {
        return (
            <div class="topnav" id="myTopnav">
            <a href="#logo" className="logo" >
                <img src={logo} />
            </a>
            <a href="#news" className="underline">Par mums</a>
            <a href="#contact" className="underline">Peidāvājumi</a>
            <a href="#portfolio" className="underline">Portfolio</a>
            <a href="#about" className="underline">Kontakti</a>
            <div class="dropdown">
              <button class="dropbtn">
                <i class="fa fa-caret-down"></i>
              </button>
            </div>
            <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>&#9776;</a>
          </div> 
        )
    }
}

export default Navbar
