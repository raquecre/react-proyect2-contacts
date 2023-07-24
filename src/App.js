import './App.css';
//import ContactsTable from "./components/ContactsTable"
import contactsJSON from "./contacts.json"
import { useState } from 'react';

function App() {
  const firstFiveContacts = contactsJSON.slice(0, 5);
  const [contacts, setcontacts] = useState(firstFiveContacts);


  const addRandomContact = () => {
  
    /* console.log(contactsJSON);
    const contactsNonVisibles = contactsJSON.filter(contact => contact.id === contacts.id);
    console.log(contactsNonVisibles);
 */ const randomPosition = Math.floor(Math.random() * contactsJSON.length);
    const randomContact = contactsJSON[randomPosition];
      contacts.forEach((contact) => {
       let uploadContacts;
 
       if (randomContact.id !== contact.id) {
         uploadContacts = [...contacts, randomContact]
         setcontacts(uploadContacts);
       }else{
        addRandomContact();
       }
     }) 
  }


  const deleteContact = (contactToDelete) => {
    const newList = contacts.filter(contact => contact.id !== contactToDelete.id)
    setcontacts(newList)
  }


  const sortPopularity = () => {
    const contactsSortPopularity = [...contacts].sort((contactA, contactB) => (contactA.popularity < contactB.popularity) ? 1 : -1);
    console.log(contactsSortPopularity);
    return setcontacts(contactsSortPopularity)

  };


  const sortName = () => {
    const contactsSortName = [...contacts].sort((contactA, contactB) => {
      if (contactA.name < contactB.name) {
        return -1;
      }
      if (contactA.name > contactB.name) {
        return 1;

      } return 0;
    })
    console.log(contactsSortName);
    return setcontacts(contactsSortName)

  };




  return (
    <div className="App">
      <div className='buttons' >
        <button onClick={addRandomContact}> Add Random Contact</button>
        <button onClick={() => sortPopularity()}> Sort by popularity</button>
        <button onClick={() => sortName()}> Sort by name</button>
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
                <td> <img  src={contact.pictureUrl} alt={contact.name} /></td>
                <td> {contact.name} </td>
                <td> {contact.popularity} </td>
                <td>{(contact.wonOscar) ? <img alt="" src='https://as1.ftcdn.net/v2/jpg/03/08/21/18/1000_F_308211869_JZ6kxlkTWHcpjLpkxFrIOLOfptt5Jv2S.jpg' /> : <img alt="" src='https://cdn.pixabay.com/photo/2013/07/13/10/27/dislike-157252_1280.png' />}</td>
                <td>{(contact.wonEmmy) ? <img alt="" src='https://magnetrononline.com/wp-content/uploads/2018/02/Emmy.jpg' /> : <img alt="" src='https://cdn.pixabay.com/photo/2013/07/13/10/27/dislike-157252_1280.png' />}</td>
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
