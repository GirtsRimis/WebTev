import React, { Component } from 'react'
import Form from './Form'
import ContactInfo from './ContactInfo'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <h1>Kontakti:</h1>
                <Form />
                <ContactInfo />
            </div>
        )
    }
}
