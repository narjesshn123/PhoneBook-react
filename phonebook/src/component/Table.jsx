import './Phonebook.css'
import { Students } from './Students';
import React, { Children } from 'react';
import { useState } from 'react';
import { Button } from './Button';
import {Form } from './Form'; 
    export const Table = ({users, setUser, setUsers, user, Children}) => {
      const [show, setShow] = useState(false);
        const handleDelete = (id) => {
            setUsers(users.filter(user => user.id !== id))
        }
      
          return( 
          <>
           <input type="text" name="search" id="searchContact" placeholder="Search Here..."required/>
           <hr style={{color:"white"}}/>         
           <svg className='trash' onClick={()=>setShow(true)} xmlns="http://www.w3.org/2000/svg" width="90" height="40" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
{Children}</svg>   
                       
<hr style={{color:"white"}}/>              
          <div>
            <table style={{width:"100%"}}>
                <tr>
                  <td>id</td>
                    <td>name</td>
                    <td>phonenumber</td>
                    <td>edit</td>
                    <td>delete</td>
                </tr>
                {users.map((user, index)=>
    <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.phonenumber}</td>
        {/* <td>
          <Button onClick={() => handleDelete(user.id)}>delete</Button>
          <Button onClick={() => setUser(user)}>update</Button>
            </td> */}
            <td>
            <svg className='trash' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"
             onClick={() => setUser(user)}>
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
            </td>
            <td>
            <svg className='trash' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"
            onClick={() => handleDelete(user.id)}>
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
            </td>
    </tr>)}
            </table>
            </div>
            <div  className=''>
           { show ? <Form   user={user} users={users} setUser={setUser} setUsers={setUsers}/>: null}
            </div>
    
        </>
      )
    }
    
