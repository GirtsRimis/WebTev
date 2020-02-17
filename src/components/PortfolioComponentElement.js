import React, { Component } from 'react'

export class PortfolioComponentElement extends Component
{
    render()
    {
        return (
            <div>
                <h3>{this.props.smallHeading}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default PortfolioComponentElement