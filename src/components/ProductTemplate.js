import React, { Component } from 'react'
import './sass/ProductTemplate.sass'

export class ProductTemplate extends Component 
{
    render() {
        return (
            <div className="productName">
                <h3>{this.props.product}</h3>
                <img src={this.props.image} alt={this.props.alt} />
                <button>{this.props.text}</button>
            </div>
        )
    }
}

export default ProductTemplate
