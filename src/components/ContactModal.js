import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button,Image}from 'react-bootstrap'
import Card from "react-bootstrap/Card";


// import{useEffect,useState} from 'react'



const ContactModal = ({showContact,show,onHide})=> {
  let contactToRender;

if(showContact.name){
 return (
   <div className="container">
    <Modal
    show={show}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header>
      <Modal.Title id="contained-modal-title" style={{paddingBottom:0}}>
      <Image  alt="avatar" src="https://i.pravatar.cc" style={{ width:50,
  height: 50, borderRadius: 50,marginRight:20,display:'inline-flex'}}/>
        {showContact.name}
        <h6 className="subHeading" style={{marginRight:-33,paddingTop:0,color:'grey'}}>{showContact.company}</h6>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Card >
   <Card.Body>
     <div >
     {
     showContact.mobile.map((mob,index)=>(
      <div key={index+'hello'}>
    <Card.Title >{mob.type}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{mob.value}</Card.Subtitle>
    </div>
     ))}
   {showContact.email.map((mailid,index)=>(
       <div key={index}>
    <Card.Title>{mailid.type}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{mailid.value}</Card.Subtitle>
    </div>
     ))}
 </div>
  </Card.Body>
  </Card>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  </div>
  );

}

return <div>{contactToRender}</div>;
}


 export default ContactModal
