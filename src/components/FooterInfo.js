import React, { Component } from 'react'
import './sass/FooterInfo.sass'

export default class FooterInfo extends Component {
    render() {
        return (
            <div className="footer-info">
                <h3>{this.props.title}</h3>
                <a href="#top">{this.props.info1}</a>
                <a href="#top">{this.props.info2}</a>
                <a href="#top">{this.props.info3}</a>
            </div>
        )
    }
}
