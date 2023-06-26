import './App.css';
//import ContactsTable from "./components/ContactsTable"
import contactsJSON from "./contacts.json"
import { useState } from 'react';

function App() {
  const firstFiveContacts = contactsJSON.slice(0, 5);
  const [contacts, setcontacts] = useState(firstFiveContacts);

  const addRandomContact = () => {
    const randomPosition = Math.floor(Math.random() * contactsJSON.length);
    const randomContact = contactsJSON[randomPosition];
    
    contacts.map((contact) => {
      let uploadContacts;

      if (randomContact.id != contact.id) {
        uploadContacts = [...contacts, randomContact]
        setcontacts(uploadContacts);
      }
    })
  }


  return (
    <div className="App">
      <button onClick={addRandomContact}> Add Random Contact</button>
      {/* <button onClick={sortPopularity}> Sort by popularity</button>
      <button onClick={sortName}> Sort by name</button> */}

      <table>
        <tbody>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>



          </tr>
          {contacts.map((contact) => {

            return (
              <tr key={contact.id}>
                <td> <img src={contact.pictureUrl} /></td>
                <td> {contact.name} </td>
                <td> {contact.popularity} </td>
                <td>{(contact.wonOscar) ? <img src='https://as1.ftcdn.net/v2/jpg/03/08/21/18/1000_F_308211869_JZ6kxlkTWHcpjLpkxFrIOLOfptt5Jv2S.jpg' /> : <img src='https://as1.ftcdn.net/v2/jpg/05/96/06/58/1000_F_596065800_wrry4ZpxN8EFU2m48427KN9x1EF2Gsyg.jpg' />}</td>
                <td>{(contact.wonEmmy) ? <img src='https://magnetrononline.com/wp-content/uploads/2018/02/Emmy.jpg' /> : <img src='https://as1.ftcdn.net/v2/jpg/05/96/06/58/1000_F_596065800_wrry4ZpxN8EFU2m48427KN9x1EF2Gsyg.jpg' />}</td>

              </tr>

            )
          })}
        </tbody>

      </table>

    </div>
  );
}

export default App;
