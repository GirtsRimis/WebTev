import React, { Component } from 'react'
import './sass/ProductTemplate.sass'

export class ProductTemplate4 extends Component 
{
    state =
    {
        isVisible: true
    }

    DropDown = () =>
    {
        const ShowArea = document.getElementById("Area4");
        this.setState(prevState => ({ isVisible: !prevState.isVisible}));
        if (this.state.isVisible === true)
        {
            ShowArea.classList.add("TextArea-show");
        }
        else
        {
            ShowArea.classList.remove("TextArea-show")
        }
    };

    render() {
        return (
            <div className="productName">
                <h3>{this.props.product}</h3>
                <img src={this.props.image} alt={this.props.alt} />
                <button onClick={this.DropDown} >{this.props.text}</button>
                <p id={this.props.id} className="TextArea">{this.props.TextArea}</p>
            </div>
        )
    }
}

export default ProductTemplate4