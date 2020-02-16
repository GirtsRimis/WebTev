import React, { Component } from 'react'
import './sass/AboutUs.sass'
import Me from './Me'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
               <h1>Par Mums - kas mēs esam?</h1>
               <Me />
            </div>
        )
    }
}