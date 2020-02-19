import React, { Component } from 'react'
import './sass/Footer.sass'
import FooterInfo from './FooterInfo'
import FooterLogo from './FooterLogo'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer>
                    <div className="footer-grid">
                        <FooterLogo
                            title="WebTev"
                        />
                        <FooterInfo 
                            title="Palīdzība"
                            info1="Sazinieties"
                            info2="Jautājumi un atbildes"
                            info3="Privātuma politika"
                        />

                        <FooterInfo 
                            title="Informācija"
                            info1="Tehnoloģijas"
                            info2="Jaunākās prasības"
                            info3="Risinājumi"
                        />
                    </div>

                    <hr className="line"></hr>

                    <h3 className="copy">WebTev &copy; 2020</h3>
                </footer>
            </div>
        )
    }
}
