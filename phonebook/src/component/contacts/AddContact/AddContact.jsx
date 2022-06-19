import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactName } from '../ContactName/ContactName'
import { v4 as uuidv4 } from 'uuid';
export const AddContact = ({contacts, setContact, names, setName}) => {
  let navigate = useNavigate();             


  const HandleChange = (e)=>{
setName({...names,[e.target.name]: e.target.value})
  }
  const HandleAdd = (e)=>{
    e.preventDefault()
    setContact([...contacts, {id:Math.floor(Math.random()*1000), ...names}])
    setName({name:"", mobile:"", photo:"", email:""})
    navigate("/contact/List")
  }
   
  return (
    <>
    <section className='add-contact p-3'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p className='h4 text-success fw-bold'>create contact</p>
            <p className='fst-italic'>it is a conact add</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-4">
            <form onSubmit={HandleAdd}>
              <div className='mb-2'>
                <input type={"text"} name="name" value={names.name} onChange={HandleChange} className="form-control" placeholder='Name'/>
              </div>
              <div className='mb-2'>
                <input type={"text"} name="photo" value={names.photo} onChange={HandleChange} className="form-control" placeholder='Photo url'/>
              </div>
              <div className='mb-2'>
                <input type={"text"} name="mobile" value={names.mobile} onChange={HandleChange} className="form-control" placeholder='Mobile'/>
              </div>
              <div className='mb-2'>
                <input type={"text"} name="email" value={names.email} onChange={HandleChange} className="form-control" placeholder='Email'/>
              </div>
              <div className='mb-2'>
                <input  type={"submit"} className="btn btn-success" placeholder='create'/>       
                <Link to="/contact/List" className="btn btn-dark ms-2">cancel</Link>
              </div>            
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
