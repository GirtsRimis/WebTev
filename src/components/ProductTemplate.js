import React, { Component } from 'react'
import './sass/ProductTemplate.sass'

export class ProductTemplate extends Component 
{
    render() {
        return (
            <div className="productName">
                <h3>{this.props.product}</h3>
                <img src="/images/lapas.png" alt={this.props.alt} />
            </div>
        )
    }
}

export default ProductTemplate
