import {Modal,Button}from 'react-bootstrap'
import PropTypes from 'prop-types'

// import{useEffect,useState} from 'react'



const ContactModal = (props)=> {
console.log({...props});

 return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">
        
        <h6>hello</h6>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    
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
