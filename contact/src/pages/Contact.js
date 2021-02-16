import contactsJSON from './contacts.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {

    const [contacts, setContact] = useState(contactsJSON)
    return <div>Contacts
        <ul>
            {contacts.map((contact) => {
                return <h3><Link to={`detail/${contact.id}`}>{contact.name.first} {contact.name.last}</Link></h3>
            })}
        </ul>
    </div>
}  