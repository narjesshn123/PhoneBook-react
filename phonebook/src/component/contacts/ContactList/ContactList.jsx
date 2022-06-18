import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'D:/react/PhoneBook/PhoneBook-react/phonebook/src/index.css';
import { ContactName } from '../ContactName/ContactName';
export const ContactList = () => {
  const [contacts, setContact] = useState(ContactName)
  const handleDelete = (id) => {
     setContact(contacts.filter(contact=> contact.id !== id))
  }
//  const getContactList = ()=>{
//   fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response=>Response.json())
// .then(data=>setcontactItem(data))
// }
// const[contactItem, setcontactItem] = useState([])
// useEffect(()=>{
//   document.title="contact";
//   getContactList()
// })

  return (
    <>
    <section className='contact-search p-3'>
      <div className='container'>
        <div className='grid'>
         <div className='row'>
          <div className="col">
           <p className='h3 fw-bold'>
            contact manager
            <Link to={'/contact/Add'} className='btn btn-primary ms-2'>
             <i className='fa fa-plus-circle me-2'/>
             new
            </Link>
           </p>
           <p className='fst-italic'>this is a contact page</p>
          </div>
         </div>
         <div className='row'>
          <div className='col-md-6'>
            <form className='row'>
              <div className='col'>
              <div className='mb-2'>
                <input type={'text'} className='form-control' placeholder='search names...'/>
              </div>
              </div>
              <div className='col'>
              <div className='mb-2'>
                <input type={'submit'} className='btn btn-outline-dark' value={'search'}/>
              </div>
              </div>
            </form>
          </div>
         </div>
        </div>
      </div>

    </section>
    <section className='contact-list'>
      <div className='container'>
        <div className='row'>
        {contacts.map(contact=>
          <div className='col-md-6' key={contact.id}>
           
             
            <div className='card my-2'>
             <div className='card-body'>
              <div className='row align-item-center d-flex  justify-content-around'>
              
              <div className='col-md-4'>
                <img src={contact.photo} alt='men' className='img-flui contact-img'/>
              </div>
              <div className='col-md-7'>
                <ul className='list-group'>
                  <li className='list-group-item list-group-item-action'>
                    name: <span className='fw-bold'>{contact.name}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                   mobile: <span className='fw-bold'>{contact.mobile}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    email: <span className='fw-bold'>{contact.email}</span>
                  </li>              
                </ul>
              </div>
              <div className='col-md-1 d-flex flex-column align-items-center'>
                <Link to={`/contact/view/${contact.id}`} className='btn btn-warning my-1'>
                 <i className='fa fa-eye'/>
                </Link>
                <Link to={'/contact/Edit'} className='btn btn-primary my-1'>
                 <i className='fa fa-pen'/>
                </Link>
                <button  to={'/contact/view/:contactId'} className='btn btn-danger my-1'>
                 <i onClick={()=>{handleDelete(contact.id)}} className='fa fa-trash'/>
                 </button>
               
              </div>

             </div>
             
             </div>
             
            </div>
           
          </div>
  )}
        </div>
      </div>
    </section>
    </>
  )
}
