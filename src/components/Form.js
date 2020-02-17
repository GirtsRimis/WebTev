import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="e-mail" value="piem. 'example@gmail.com'" />
                    <input type="submit" value="Sūtīt" />
                </form>
            </div>
        )
    }
}
