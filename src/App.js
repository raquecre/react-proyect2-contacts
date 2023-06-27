import './App.css';
//import ContactsTable from "./components/ContactsTable"
import contactsJSON from "./contacts.json"
import { useState } from 'react';

function App() {
  const firstFiveContacts = contactsJSON.slice(0, 5);
  const [contacts, setcontacts] = useState(firstFiveContacts);

  const AddRandomContact = () => {
    const randomPosition = Math.floor(Math.random() * contactsJSON.length);
    const randomContact = contactsJSON[randomPosition];

    contacts.map((contact) => {
      let uploadContacts;

      if (randomContact.id !== contact.id) {
        uploadContacts = [...contacts, randomContact]
        setcontacts(uploadContacts);
      }
    })
  }
  /*  const newdata = [...data].sort((a, b) => (a[header] > b[header] ? 1 : -1));
   setdata(newdata); */
  /* const sortPopularity = () =>
   /* [...contacts.popularity].sort((a, b) => (a > b)); 
  const sortName = () =>  [...contacts.name].sort((a, b) => (a > b));  */
  const deleteContact = (contactToDelete) => {
    const newList = contacts.filter(contact => contact.id != contactToDelete.id)
    setcontacts(newList)
  }

  return (
    <div className="App">
      <div className='buttons' >
        <button onClick={AddRandomContact}> Add Random Contact</button>
        {/* <button onClick={sortPopularity}> Sort by popularity</button>
          <button onClick={sortName}> Sort by name</button>
 */}
      </div>

      <table>
        <tbody>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
            <th> Actions </th>

          </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td> <img src={contact.pictureUrl} /></td>
                <td> {contact.name} </td>
                <td> {contact.popularity} </td>
                <td>{(contact.wonOscar) ? <img src='https://as1.ftcdn.net/v2/jpg/03/08/21/18/1000_F_308211869_JZ6kxlkTWHcpjLpkxFrIOLOfptt5Jv2S.jpg' /> : <img src='https://cdn.pixabay.com/photo/2013/07/13/10/27/dislike-157252_1280.png' />}</td>
                <td>{(contact.wonEmmy) ? <img src='https://magnetrononline.com/wp-content/uploads/2018/02/Emmy.jpg' /> : <img src='https://cdn.pixabay.com/photo/2013/07/13/10/27/dislike-157252_1280.png' />}</td>
                <td> <button onClick={() => deleteContact(contact)}>Delete</button> </td>
              </tr>

            )
          })}
        </tbody>

      </table>

    </div>
  );
}

export default App
