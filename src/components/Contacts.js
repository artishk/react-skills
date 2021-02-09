import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import ContactModal from './ContactModal.js'
import {useState} from 'react'


const Contacts = ({contacts}) => {
  const [modalShow, setModalShow] = useState(false);
  const [showContact,setShowContact] = useState({})

const getContactById=async (id)=>{
  console.log(id);
  const res=await fetch('http://localhost:9190/getContactsById/' + id)
  const data = await res.json()
  
  console.log(data);
   setModalShow(true)
   setShowContact(data)
}
 

  return (

  <div className= "container">
  <ListGroup>
    {contacts.map((contact,index) => (
      
      <>
          <ListGroup.Item key={index} action onClick= {()=>getContactById(contact.ID)}>{contact.name}</ListGroup.Item>
         
    </>
   
    ))}
    
        
  </ListGroup>
  <ContactModal
          contact={showContact}
          show={modalShow}
          onHide={() => setModalShow(false)}/>
  
    </div>
  )
}


export default Contacts
