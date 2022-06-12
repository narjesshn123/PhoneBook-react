import React from 'react';
import { Button } from 'react-bootstrap';
import { Friendlist } from './Friendlist';
import { useState } from 'react';
export const Friend = ({ setUser, user}) => {
    const [users, setUsers] = useState(Friendlist)
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
  return (
    
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
            </div>
  )
}

