import './Phonebook.css'
import { Students } from './Students';
import React from 'react';
import { useState } from 'react';
import { Button } from './Button';
import {Form } from './Form';
    export const Table = ({users, setUser, setUsers, user}) => {
 

        const handleDelete = (id) => {
            setUsers(users.filter(user => user.id !== id))
        }

       
        return( <>
         <input type="text" name="search" id="searchContact" placeholder="Search Here..."required/>
         <hr style={{color:"white"}}/>
          <div>
            <table style={{width:"100%"}}>
                <tr>
                  <td>id</td>
                    <td>name</td>
                    <td>phonenumber</td>
                    <td>do delete</td>
                </tr>
                {users.map((user, index)=>
    <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.phonenumber}</td>
        <td>
          <Button onClick={() => handleDelete(user.id)}>delete</Button>
          <Button onClick={() => setUser(user)}>update</Button>

            </td>
    </tr>)}
            </table>
            <Form user={user} users={users} setUser={setUser} setUsers={setUsers} />
        </div>
    
        </>
      )
    }
    
