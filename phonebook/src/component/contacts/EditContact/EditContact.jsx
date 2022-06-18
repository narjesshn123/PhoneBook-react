import React from 'react'
import { Link } from 'react-router-dom';               
import { useNavigate } from 'react-router-dom';
export const EditContact = ({contacts, setContact, names, setName}) => {
  let navigate = useNavigate();  
const handleEdit=(e)=>{
  e.preventDefault()
  if(names.id){
    setContact(contacts.map(oldContact=>oldContact.id === names.id ? names : oldContact ))

  }
  // setContact([ {...names},...contacts])
  navigate("/contact/List")
}
const handleChange = (e)=>{
  setName({...names,[e.target.name]: e.target.value})
    }
  return (
    <section className='add-contact p-3'>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p className='h4 text-primary fw-bold'>edit contact</p>
          <p className='fst-italic'>it is a conact add</p>
        </div>
      </div>
      <div className='row  align-items-center'>
        <div className="col-md-4">
         <form onSubmit={handleEdit}>
            <div className='mb-2'>
              <input name='name' value={names.name} onChange={handleChange} type={"text"} className="form-control" placeholder='Name'/>
            </div>
            <div className='mb-2'>
              <input name='photo' value={names.photo} onChange={handleChange} type={"text"} className="form-control" placeholder='Photo url'/>
            </div>
            <div className='mb-2'>
              <input  name='mobile' value={names.mobile} onChange={handleChange} type={"text"} className="form-control" placeholder='Mobile'/>
            </div>
            <div className='mb-2'>
              <input  name='email' value={names.email} onChange={handleChange} type={"text"} className="form-control" placeholder='Email'/>
            </div>
            <div className='mb-2'>
              <input type={"submit"}  className="btn btn-primary" placeholder='update'/>       
              <Link to="/contact/List" className="btn btn-dark ms-2">cancel</Link>
            </div>            
          </form>
        </div>
        <div className="col-md-6">
          <img src={names.photo} alt='men' className='contact-img'/>
        </div>
      </div>
    </div>
  </section>
  )
}
