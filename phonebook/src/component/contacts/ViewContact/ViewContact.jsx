import React from 'react'
import { Link } from 'react-router-dom';
import { ContactName } from '../ContactName/ContactName';
export const ViewContact = () => {

   
  return (
  <>
   <section className='view-contact-into p-3'>
    <div className='container'>
      <div className="row">
        <div className="col">
          <p className="h3 text-warning fw-bold">view contact</p>
          <p className='fst-italic'>hello i am a view contact</p>

        </div>
      </div>
    </div>

</section>
<section className='view-contact mt-3'>
  <div className='container'>
    <div className="row">
      
      <div className="col-md-4">
        <img src={ContactName.photo}/>
      </div>
      <div className="col-md-8">
      <ul className='list-group'>
                  <li className='list-group-item list-group-item-action'>
                    name: <span className='fw-bold'>{ContactName.name}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                   mobile: <span className='fw-bold'>{ContactName.mobile}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    email: <span className='fw-bold'>{ContactName.email}</span>
                  </li>   
                  {/* <li className='list-group-item list-group-item-action'>
                    company: <span className='fw-bold'>narjes</span>
                  </li> 
                  <li className='list-group-item list-group-item-action'>
                    title: <span className='fw-bold'>narjes</span>
                  </li> 
                  <li className='list-group-item list-group-item-action'>
                    group: <span className='fw-bold'>narjes</span>
                  </li>  */}
                </ul>
      </div>
    </div>
    <div className="row">
     <div className="col">
      <Link to={"/contact/List"} className="btn btn-warning">back</Link>
     </div>
    </div>
  </div>
</section>
  </>
  )
}
