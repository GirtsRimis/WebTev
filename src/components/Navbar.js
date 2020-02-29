import React, { Component } from 'react'
import './sass/Navbar.sass'
import logo from './images/logo_transparent.png';

export class Navbar extends Component 
{
    state =
    {
        clicked: true
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    showDropdown = () =>
    {
        const navbar = document.getElementById("myTopnav");
        this.setState(prevState => ({ clicked: !prevState.clicked}));

        if (this.state.clicked === true)
        {
            navbar.classList.add("responsive");
            console.log("added");
        } 
        else 
        {
            navbar.classList.remove("responsive");
            console.log("remove");
        }
    } 

    handleScroll = (event) =>
    {
        const nav = document.getElementById("myTopnav");
        const sticky = nav.offsetHeight - nav.offsetHeight + 1;

        let scrollTop = window.scrollY;

        if (scrollTop >= sticky)
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
                    <img src={logo} alt="logo"/>
                </a>
                <a href="#news" className="underline">Par mums</a>
                <a href="#contact" className="underline">Peidāvājumi</a>
                <a href="#portfolio" className="underline">Portfolio</a>
                <a href="#about" className="underline">Kontakti</a>
                <button className="icon" onClick={this.showDropdown}>&#9776;</button>
            </nav> 
        )
    }
}

export default Navbar
