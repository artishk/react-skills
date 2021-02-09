import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button}from 'react-bootstrap'
import Card from "react-bootstrap/Card";


// import{useEffect,useState} from 'react'



const ContactModal = ({contact,show,onHide})=> {
  let contactToRender;
if(contact){
 return (

    <Modal
    show={show}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">
        {contact.name}
        <h6>{contact.company}</h6>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Card style={{ width: '18rem' }}>
   <Card.Body>
     <div>
     {
     contact.mobile.map((mob,index)=>(
       <>
    <Card.Title key={index}>{mob.type}</Card.Title>
    <Card.Subtitle key={index+1}className="mb-2 text-muted">{mob.value}</Card.Subtitle>
    </>
     ))}
   {contact.email.map((mailid)=>(
       <>
    <Card.Title>{mailid.type}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{mailid.value}</Card.Subtitle>
    </>
     ))}
 </div>
  </Card.Body>
  </Card>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>

  )

}else {
  contactToRender = "Loading...";
}

return <div>{contactToRender}</div>;
}


 export default ContactModal
