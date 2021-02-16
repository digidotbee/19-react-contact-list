import contactsJSON from './contacts.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';

export default function Contact() {

    const [contacts, setContact] = useState(contactsJSON)
    return <div className="container">
        <h2 className="myPeeps">My Peeps</h2>
        <ul className="newtask">
            {contacts.map((contact) => {
                return <li>
                    <Link to={`detail/${contact.id}`}>
                        <img src={contact.picture.thumbnail}></img>
                         {contact.name.first} {contact.name.last}</Link></li>
            })}
        </ul>
    </div>
}  