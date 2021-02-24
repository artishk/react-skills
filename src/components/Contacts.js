import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import ContactModal from './ContactModal.js'
import {useState} from 'react'




const Contacts = ({contacts}) => {
  const [modalShow, setModalShow] = useState(false);
  const [contact,setContact] = useState({})



const getContactById=async (id)=>{

  const res=await fetch('http://localhost:9190/getContactsById/' + id)
  const data = await res.json()
  
   
   setModalShow(true)
   setContact(data)
}



if(contacts){

  return (

  <div className="container" >
  <ListGroup>
  
    {contacts.map((contact,index) =>  (
     <div className="container" key={index}>
          
          <ListGroup.Item  style = {{padding:5,display:'inline-flex',textAlign:'justify'}} key={contact.ID} action onClick= {()=>getContactById(contact.ID)}>
          <Image  alt="avatar" src="https://i.pravatar.cc" style={{ width:50,
  height: 50, borderRadius: 50,marginRight:20,display:'inline-flex'}}/>
  {contact.name}
          </ListGroup.Item>
   
     </div>
   
    ))}
    
        
  </ListGroup>
  <ContactModal
          showContact={contact}
          show={modalShow}
          onHide={() => setModalShow(false)}/>
  
    </div>
  )
} 
}


export default Contacts
