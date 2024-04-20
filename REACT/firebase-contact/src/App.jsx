import React, { useState, createContext } from 'react';
import './style.css';
import Container from './components/Container';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';

export const ContactsContext = createContext();
export const ToggleContext = createContext();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contactsRef = collection(db, "contacts");
    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contacts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contacts);
    }, (error) => {
      console.error("Error fetching contacts: ", error);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ToggleContext.Provider value={[isOpen, setIsOpen]}>
      <ContactsContext.Provider value={contacts}>
        <div className="container max-w-full">
          <Container contacts={contacts}/>
        </div>
      </ContactsContext.Provider>
    </ToggleContext.Provider>
  );
}

export default App;
