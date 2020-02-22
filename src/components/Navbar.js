import React, { Component } from 'react'
import './sass/Navbar.sass'
import logo from './images/logo_transparent.png';
import dropdown from './images/dropdown.png'

export class Navbar extends Component 
{

    showDropdown = () =>
    {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    } 

    addSticky = (e) =>
    {
        const navbar = document.getElementById("myTopnav");
        const sticky = navbar.offsetHeight();

        if (window.screenTop >= sticky)
        {
            navbar.classList.add("sticky");
        }
    }

    render() {
        return (
            <div onScroll={this.addSticky} className="topnav" id="myTopnav">
            <a href="#logo" className="logo" >
                <img src={logo} />
            </a>
            <a href="#news" className="underline">Par mums</a>
            <a href="#contact" className="underline">Peidāvājumi</a>
            <a href="#portfolio" className="underline">Portfolio</a>
            <a href="#about" className="underline">Kontakti</a>
            <div className="dropdown">
              <button className="dropbtn">
                <i className="fa fa-caret-down"></i>
              </button>
            </div>
            <a className="icon" onClick={this.showDropdown}>&#9776;</a>
          </div> 
        )
    }
}

export default Navbar
