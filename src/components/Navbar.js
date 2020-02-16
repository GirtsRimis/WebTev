import React, { Component } from 'react'
import './sass/LandingPage.sass'
import logo from './images/logo_transparent.png';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="nav-grid">
                        <li>
                            <a href="#top">
                                <img className="logo" src={logo} alt="Logo" />
                            </a>
                        </li>
                        <li>
                            <a className="underline" href="#top">Par mums</a>
                        </li>
                        <li>
                            <a className="underline" href="#top">Peidāvājumi</a>
                        </li>
                        <li>
                            <a className="underline" href="#top">Portfolio</a>
                        </li>
                        <li>
                            <a className="underline" href="#top">Kontakti</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
