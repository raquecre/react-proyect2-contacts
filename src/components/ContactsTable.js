//import { useState } from "react";
//import contactsJSON from "../contacts.json"

const ContactsTable = () => {
    const [contacts, setcontacts] = useState(contactsJSON)

    contactsJSON.map((contact) => {
        return (
            <table>
                <tr className="artistsTable">
                    <td> <img src={contact.pictureUrl} /></td>
                    <td> {contact.name} </td>
                    <td> {contact.popularity} </td>
                </tr>
            </table>

        )
    })

}

//export default ContactsTable;