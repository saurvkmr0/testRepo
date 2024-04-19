import React, { useState } from 'react'
import './style.css';
import Container from './components/Container';
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import {db} from './config/firebase';



const App = () => {

  const [contacts, setContacts] = useState("");


  useEffect(()=>
  {
    const getContacts = async () =>
    {
      const contactsRef = collection(db,"contacts");
      const contactsSnapshot = await getDocs(contactsRef);
      const contacts = contactsSnapshot.docs.map((doc)=>
        {
          return{
            id : doc.id,
            ...doc.data(),
          }
        }
      );
      setContacts(contacts); // This is the contact fetched form the firestore as a array of objects.P 
    }
    getContacts();
  }
,[]);


  return (
    <div className="container max-w-full">
        <Container contacts={contacts}/>
    </div>
  )
}

export default App;