import './App.css';
import { useState,useEffect } from 'react'
import Contacts from './components/Contacts.js'
import 'bootstrap/dist/css/bootstrap.min.css';




 const App = () => {
 const [showContacts,setShowContacts] = useState([])
 useEffect(() => {
   const getContacts=async ()=>{
     const contactsFromServer = await fetchContacts()
     setShowContacts(contactsFromServer)
   }
  getContacts()
  })

//fetch contacts
 const fetchContacts= async()=>{
  const res = await fetch("http://localhost:9190/getAllContacts")
  const data= await res.json();
 
  return data;
 } 
  return (
    <div className="App">
   <h1>My Contacts</h1>
   
   <Contacts contacts={showContacts}/>
   
  
  </div>
  )


 }
export default App;
