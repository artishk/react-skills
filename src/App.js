import './App.css';
import { useState,useEffect } from 'react'
import Contacts from './components/Contacts.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button}from 'react-bootstrap';
import AddNewContacts from './components/AddNewContacts';
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import SearchContacts from './components/SearchContacts'


const App = () => {

const[showAddContactForm,setShowAddContactForm]= useState(false)
const [showContacts,setShowContacts] = useState([])
const [showSearchContacts,setShowSearchContacts] = useState([])
let searchString= false;

 useEffect(() => {
   const getContacts=async ()=>{
     const contactsFromServer = await fetchContacts()
     await setShowContacts(contactsFromServer)
   }
   getContacts()
 
  },[showContacts])


//fetch contacts
 const fetchContacts= async()=>{
  const res = await fetch("http://localhost:9190/getAllContacts")
  const data= await res.json();
 
  return data;
 } 

 const showSearchTerm= (term)=>{
   console.log(term);
   
  searchString=!searchString
  searchedContacts(term)
  
   
   
 }
   
  const searchedContacts= (term)=>{
   const contactAfterSearch=showContacts.filter(contact=>
      contact.name.toLowerCase().includes(term)
         )
         
          
          setShowSearchContacts(contactAfterSearch)
         console.log(contactAfterSearch);
        }   



 
 return (

<div className="App">

  <Button variant={showAddContactForm?"danger":"primary"} onClick={()=>setShowAddContactForm(!showAddContactForm)}>{showAddContactForm?'Close':'Add'}
     </Button>
    
    {showAddContactForm && <AddNewContacts />}
    <Header/>
    <div className="ui container">
    <SearchContacts onChange={showSearchTerm}/>
    
    </div>

       {searchString?<Contacts contacts={showSearchContacts}/>:
       <Contacts contacts={showContacts}/> }
  
 

    <Footer/>
  </div>
 
)}
export default App;
