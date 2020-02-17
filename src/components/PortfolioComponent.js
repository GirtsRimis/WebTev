import React, { Component } from 'react'
import './sass/PortfolioComponent.sass'
import PortfolioComponentElement from './PortfolioComponentElement'

export class PortfolioComponent extends Component {
    render() {
        return (
            <div className="portfolio-component">
                <h3>{this.props.heading}</h3>
                <img src={this.props.image} alt={this.props.altText} />
                <div className="portfolio-component-layout">
                    <PortfolioComponentElement
                        smallHeading={this.props.smallHeading1}
                        text={this.props.text1}
                    />
                    <PortfolioComponentElement
                        smallHeading={this.props.smallHeading2}
                        text={this.props.text2}
                    />
                    <PortfolioComponentElement
                        smallHeading={this.props.smallHeading3}
                        text={this.props.text3}
                    />
                </div>
            </div>
        )
    }
}

export default PortfolioComponent