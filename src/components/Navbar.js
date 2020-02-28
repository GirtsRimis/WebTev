import React, { Component } from 'react'
import './sass/Navbar.sass'
import logo from './images/logo_transparent.png';

export class Navbar extends Component 
{

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    showDropdown = () =>
    {
        const navbar = document.getElementById("myTopnav");
        if (navbar.className === "topnav") {
            navbar.className += " responsive";
        } else {
            navbar.className = "topnav";
        }
    } 

    handleScroll = (event) =>
    {
        const nav = document.getElementById("myTopnav");
        const sticky = nav.offsetHeight;

        let scrollTop = event.srcElement.body.scrollTop;

        console.log(sticky);

        if (scrollTop <= sticky)
        {
            nav.classList.add('sticky');
        }
        else
        {
            nav.classList.remove('sticky');
        }
    }

    render() {
        return (
            <nav onScroll={this.handleScroll} className="topnav" id="myTopnav">
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
            </nav> 
        )
    }
}

export default Navbar
