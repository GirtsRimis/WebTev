import React, { Component } from 'react'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import  linkedin from './images/linkedin.png'
import './sass/FooterLogo.sass'

export default class FooterLogo extends Component {
    render() {
        return (
            <div className="footer-logo">
                <h3>{this.props.title}</h3>
                <a href="#top"><img src={facebook} alt="Facebook" /></a>
                <a href="#top"><img src={twitter} alt="Twitter" /></a>
                <a href="#top"><img src={instagram} alt="Instagram" /></a>
                <a href="#top"><img src={linkedin} alt="Linkedin" /></a>
            </div>
        )
    }
}
