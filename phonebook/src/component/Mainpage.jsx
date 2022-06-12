import React from 'react'
import { Link } from 'react-router-dom';
import { Form } from './Form';
import { Table } from './Table';
import { Family } from './Family';
import './Mainpage.css';    
import ReactDOM from "react-dom/client";
import { useState } from 'react';
import { Students } from './Students';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"         
import { Friend } from './Friend';
export const Mainpage = () => {
  const [users, setUsers] = useState(Students)
  const [user, setUser] = useState({
      name: "", 
      phonenumber: "",
    })

  return (
    <div className='rot'>
        <div className='display'>
            <div className='right-root'>
                <div className='label'>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="26" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
  <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>
                    phonebook
                    </div>
                <ul className='list-root'>
                    <div className='list-all'>
                   
                        <a>
                        <Link to={"allcontact"}>
                        all contact</Link>
                        </a>
                        
                        </div>
                        <div style={{backgroundColor:" #c9ebe3"}} className='list-all'>
                        <Link to={"family"}>
                        <a>
                        family
                        </a>
                        </Link>
                        </div>
                        <div style={{backgroundColor:" #c9ebe3"}} className='list-all'>
                        <Link to={"friend"}>
                        <a>
                        friends
                        </a>
                        </Link>
                        </div>
                </ul>
            </div>
        </div>
        <div className='left-root'>

        <Routes>
       <Route path="/" element={<p>hello</p>} />
       <Route path={"allcontact"} element={<Table user={user} users={users} setUser={setUser} setUsers={setUsers} />} />
              <Route path={"family"} element={<Family user={user} users={users} setUser={setUser} setUsers={setUsers}/>} />
              <Route path={"friend"} element={<Friend user={user} setUser={setUser} />} />
     </Routes>

        </div>
        </div>
  )
}
