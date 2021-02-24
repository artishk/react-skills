import {useState} from'react'

const SearchContacts = ({onChange}) => {
   const[searchTerm,setSearchTerm]=useState('')
  const onFormSubmit=(e)=>{
    e.preventDefault()
 
    onChange(searchTerm)
  }
  

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
      </form>
      
    </div>
  )
}

export default SearchContacts
