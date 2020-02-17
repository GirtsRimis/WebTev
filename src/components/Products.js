import React, { Component } from 'react'
import './sass/Products.sass'
import ProductTemplate from './ProductTemplate'
import lapas from './images/lapas.png'
import komrec from './images/komerc.png'
import datubaze from './images/datubazees.png'
import test from './images/testesana.png'

export class Products extends Component 
{
    render() {
        return (
            <div className="products">
                <ProductTemplate 
                    product="Lapas" 
                    image={lapas} alt="www"
                    text="Lasīt vairāk"
                />
                <ProductTemplate 
                    product="Komerclapas" 
                    image={komrec} alt="EUR"
                    text="Lasīt vairāk"
                />
                <ProductTemplate 
                    product="Datubāze" 
                    image={datubaze} alt="db"
                    text="Lasīt vairāk"
                />
                <ProductTemplate 
                    product="Testēšana" 
                    image={test} alt="test"
                    text="Lasīt vairāk"
                />
            </div>
        )
    }
}

export default Products
