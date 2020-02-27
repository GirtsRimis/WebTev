import React, { Component } from 'react'
import './sass/Products.sass'
import ProductTemplate1 from './ProductTemplate1'
import ProductTemplate2 from './ProductTemplate2'
import ProductTemplate3 from './ProductTemplate3'
import ProductTemplate4 from './ProductTemplate4'
import lapas from './images/lapas.png'
import komrec from './images/komerc.png'
import datubaze from './images/datubazees.png'
import test from './images/testesana.png'

export class Products extends Component 
{
    render() {
        return (
            <div className="products">
                <ProductTemplate1
                    product="Lapas" 
                    image={lapas} alt="www"
                    text="Lasīt vairāk"
                    TextArea="Mēs veidojam profesionālas lapas ar modernu dizainu, kuru galvenais mērķis ir radīt interaktīvu un patīkamu pieredzi lietotājam."
                    id="Area1"
                />
                <ProductTemplate2
                    product="Komerclapas" 
                    image={komrec} alt="EUR"
                    text="Lasīt vairāk"
                    TextArea="Spējas izveidot modernu internet pakalpojumu ar back-end tehnoloģijām, kā Node.js un Express."
                    id="Area2"
                />
                <ProductTemplate3
                    product="Datubāze" 
                    image={datubaze} alt="db"
                    text="Lasīt vairāk"
                    TextArea="Mēs izveidojam gan relāciju, gan nerelāciju datu bāzes, kurās uzturēsum jūsu datus."
                    id="Area3"
                />
                <ProductTemplate4
                    product="Testēšana" 
                    image={test} alt="test"
                    text="Lasīt vairāk"
                    TextArea="Veicam Unit Testing, Integrāciju testēšanu un funkcionālo testēšanu."
                    id="Area4"
                />
            </div>
        )
    }
}

export default Products
