
import { Button} from 'react-bootstrap'
import {Form,Col} from 'react-bootstrap'
import {useState} from 'react';
import {BsPlusCircle} from "react-icons/bs";


const AddNewContacts = ({onSubmit}) => {
  const [contactForm,setContactForm]=useState({
    ID:'',
    name:'',
    company:'',
    mobile:[{
      type:'',
      value:''

    }],
    email:[{
      type:'',
      value:''
    }]

  })

  const addMobile=()=>{
    setContactForm(contactForm.mobile.push({type:'',value:''}))
  }

  const addEmail=()=>{
    setContactForm(contactForm.Email.push({type:'',value:''}))
  }

  const onFormSubmit=(e)=>{
    e.preventDefault()
   
    if(contactForm.name===''){
      alert('Please enter the name and number')
    }
     onSubmit({contactForm})
     setContactForm({
      ID:'',
      name:'',
      company:'',
      mobile:[{
        type:'',
        value:''
  
      }],
      email:[{
        type:'',
        value:''
      }]
  
    })
  }


  return (
    <div className="container">
    <Form onSubmit={onFormSubmit}>
      
   
  <Form.Group controlId="formBasicName">
  <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" value={contactForm.name} onChange={(e)=>
      setContactForm({name:e.target.value})
    
    
  }/>
   </Form.Group>
 

  <Form.Group controlId="formBasicCompany">
    <Form.Label>company</Form.Label>
    <Form.Control type="text" placeholder="company" value={contactForm.company} onChange={
      (e)=>setContactForm({company:e.target.value})
     
      
      }/>
  </Form.Group>
  <Form.Row>
  <Form.Label>Mobile:</Form.Label>
  { contactForm.mobile.map(({type,value},index)=> (
    
    <div key={index}>
    <Form.Group as= {Col} >
        
        <Form.Control as="select"  value={type} onSelect={(e)=>setContactForm({mobile:[{type:e.target.value}]})}>
          <option>Choose...</option>
          <option>Home</option>
          <option>Work</option>
        </Form.Control>
   
      </Form.Group>
     
      <Form.Group as= {Col} >
      <Form.Control type="text" placeholder="enter number" value={value} onChange={(e)=>setContactForm({mobile:[{value:e.target.value}]})}/>
      
      </Form.Group>
      <div>
      <BsPlusCircle style={{color:'green',cursor:'pointer'}} onClick={addMobile}/>
      </div>
      </div>
        
  ))}
  </Form.Row>
  <Form.Row>
  <Form.Label>Email:</Form.Label>
 
  <Form.Group as={Col} controlId="formGridState">
  
      <Form.Control as="select">
        <option>Choose...</option>
        <option>Home</option>
        <option>Work</option>
      </Form.Control>
  
    </Form.Group>

    <Form.Group as={Col}  controlId="formGridZip">
    <Form.Control type="text" placeholder="enter email id" />
   
    </Form.Group>
    <div>
    <BsPlusCircle style={{color:'green',cursor:'pointer'}} onClick ={addEmail}/>
      </div>
  </Form.Row>

  <Button variant="primary" type="submit" >
    Submit
  </Button>

</Form>  
    </div>
  )
}

export default AddNewContacts
