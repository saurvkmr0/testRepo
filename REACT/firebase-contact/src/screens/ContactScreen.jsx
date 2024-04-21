import React, {useContext} from 'react';
import NameCard from '../components/NameCard';
import { ToggleContext } from '../App';

const ContactScreen = ({contacts}) => {
  const [isOpen, setIsOpen] = useContext(ToggleContext);
  return (
    <div className={`${isOpen ? 'add-blur' : 'remove-blur'}`} id='contact-screen'>
    {contacts.map((item) => (
      <NameCard id={item.id} contactName={item.name} ContactMail={item.email}/>)
    )}
 
    </div>
  )
}

export default ContactScreen;