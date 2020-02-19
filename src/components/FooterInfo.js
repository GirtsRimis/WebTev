import React, { Component } from 'react'
import './sass/FooterInfo.sass'

export default class FooterInfo extends Component {
    render() {
        return (
            <div className="footer-info">
                <h3>{this.props.title}</h3>
                <a>{this.props.info1}</a>
                <a>{this.props.info2}</a>
                <a>{this.props.info3}</a>
            </div>
        )
    }
}
