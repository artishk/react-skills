import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import ContactModal from './ContactModal.js'
import {useState} from 'react'


const Contacts = ({contacts}) => {
  const [modalShow, setModalShow] = useState({
    show:false,
    contact:{}});

const getContactById=async (id)=>{
  console.log(id);
  const res=await fetch('http://localhost:9190/getContactsById/' + id)
  const data = await res.json()
  
  console.log(data);
  await setModalShow(
    {show:true,data:data})
}
 

  return (

  <div className= "container">
  <ListGroup>
    {contacts.map((contact,index) => (
      <>
          <ListGroup.Item key={index} action onClick= {()=>getContactById(contact.ID)}>{contact.name}</ListGroup.Item>
         
    </>
   
    ))}
     <ContactModal
          contact={modalShow}
          show={modalShow}
          onHide={() => setModalShow(false)}/>
        
  </ListGroup>
  
    </div>
  )
}


export default Contacts
