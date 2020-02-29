import React, { Component } from 'react'
import './sass/Portfolio.sass'
// import PortfolioComponent from './PortfolioComponent'

export class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <h1>Portfolio</h1>
                <h2>Mūsu radītie produkti:</h2>
                <p>Produkti vēl top</p>
                {/* <PortfolioComponent
                    heading="WebSite"
                    image={img}
                    altText="Image"
                    smallHeading1="Heading1"
                    text1="Text1"

                    smallHeading2="Heading2"
                    text2="Text2"

                    smallHeading3="Heading3"
                    text3="Text3"
                /> */}
            </div>
        )
    }
}

export default Portfolio