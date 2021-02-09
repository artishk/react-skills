import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button}from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types'

// import{useEffect,useState} from 'react'



const ContactModal = (props)=> {
  

 return (

    <Modal
    show={props.show}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">
        {props.contact.name}
        <h6>{props.contact.company}</h6>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Card style={{ width: '18rem' }}>
   <Card.Body>
     <div>
     {props.contact.mobile.map((mob)=>(
       <>
    <Card.Title>{mob.type}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{mob.value}</Card.Subtitle>
    </>
     ))}
   {props.contact.email.map((mailid)=>(
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
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>

  )
}
 ContactModal.propTypes={
   contact:PropTypes.object,
   onHide:PropTypes.func,


 }

export default ContactModal
