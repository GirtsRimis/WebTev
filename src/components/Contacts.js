import React, { Component } from 'react'
import Form from './Form'
import ContactInfo from './ContactInfo'
import './sass/Contacts.sass'

export default class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <h1>Kontakti:</h1>
                <Form />
                <ContactInfo />
            </div>
        )
    }
}
