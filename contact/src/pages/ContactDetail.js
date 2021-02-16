import ContactsJSON from './contacts.json'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ContactDetail(props) {
    // console.log(props)
    const id = props.match.params.id 
    const user = ContactsJSON.find(user => user.id == id)
    const [activeUser, setActiveUser] = useState(user)
    // console.log(setActiveUser)
    return (
    <div className="container">
        <setActiveUser>Im not sure what to do from here.</setActiveUser>
        <div className="back-btn">This does not bode well for the album homework.
        </div>
        <h2>
           <img src="https://image-cdn.neatoshop.com/styleimg/13584/none/gray/default/147643-20.jpg"></img>
        </h2>
        <section className="nameCards">
            <span></span>
        </section>
    </div>
    )
}