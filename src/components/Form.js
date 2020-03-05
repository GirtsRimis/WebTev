import React, { Component } from 'react'
import './sass/Form.sass'

export default class Form extends Component {
    render() {
        return (
            <div className="form">
                <form action="/action.php" method="POST">
                    <input className="form-input" type="text" name="e-mail"  placeholder="piem. 'example@gmail.com'" />
                    <br></br>
                    <input className="submit" type="submit" value="Sūtīt" />
                </form>
            </div>
        )
    }
}
