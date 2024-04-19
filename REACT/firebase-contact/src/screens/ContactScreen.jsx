import NameCard from '../components/NameCard'

const ContactScreen = ({contacts}) => {
  console.log(contacts);
  return (
    <div className="" id='contact-screen'>
    {contacts.map((item) => (
      <NameCard id={item.id} contactName={item.name} ContactMail={item.email}/>)
    )}
 
    </div>
  )
}

export default ContactScreen;