import React, { Component } from 'react'
import logo from './logo_transparent.png';
import './sass/LandingPage.sass'

export class LandingPage extends Component 
{
    render()
    {
      return (
        <div className="picture">
          <nav>
              <ul className="nav-grid">
                  <li>
                      <a href="#top">
                          <img src={logo} alt="Logo" />
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

export default LandingPage