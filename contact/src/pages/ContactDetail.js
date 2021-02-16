import ContactsJSON from './contacts.json'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ContactDetail(props) {
    const listID = props.match.params.id 
    const userFound = ContactsJSON.find(user => user.listID == listID)
    const [activeUser, setActiveUser] = useState(userFound)
    console.log(setActiveUser)
    return (
    <div className="contact">
        <p className="back-btn">
        </p>
        <h2>
           Picture
        </h2>
        <section className="nameCards">
            <span></span>
        </section>
    </div>
    )
}