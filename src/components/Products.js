import React, { Component } from 'react'
import './sass/Products.sass'
import ProductTemplate from './ProductTemplate'

export class Products extends Component 
{
    render() {
        return (
            <div className="products">
                <ProductTemplate 
                    product="Lapas" 
                    src="../images/lapas.png" alt="www"
                />
                <ProductTemplate 
                    product="Komerclapas" 
                    src="../images/komerc.png" alt="EUR"
                />
                <ProductTemplate 
                    product="Datubāze" 
                    src="../images/datubazees.png" alt="db"
                />
                <ProductTemplate 
                    product="Testēšana" 
                    src="../images/testesana.png" alt="test"
                />
            </div>
        )
    }
}

export default Products
