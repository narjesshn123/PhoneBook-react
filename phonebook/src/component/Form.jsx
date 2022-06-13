import { useState } from 'react';          
import './Phonebook.css';          
export const Form = ({users, setUser, setUsers, user})=>{
    const[hide, setHide] = useState(true)
      const handleAdd = (e) => {
            e.preventDefault()
          if(user.id){
            setUsers(users.map(oldUser => user.id ===oldUser.id ? user :oldUser))
          }
          else{
            setUsers([...users, {id:Math.floor(Math.random()*1000), ...user}]) 
          }
            setUser({name:"", phonenumber:""})
      }
    
  const handleChange = (e)=>{
  setUser({...user, [e.target.name]: e.target.value})
  }
    return(

        <>
        {hide?
        <div style={{border:"1px solid gray"}}>
        <svg onClick={()=>setHide(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
        <form id="headFrm" onSubmit={handleAdd}>
  
            <div id="frm">
<h2>add contect</h2>
<label htmlFor='input1'>name:</label>
<input id='input1' name='name' type={"text"}
onChange={handleChange}
placeholder="name"
value={user.name}/>
<br/>
<br/>
<label htmlFor='input2'>phonenumber:</label>
<input id='input2' type={"text"} name='phonenumber' 
onChange={handleChange}
placeholder="phonenumber"
value={user.phonenumber}/>
<br/>
<br/>
<input  type={"submit"}/>
</div>
</form>
</div> : null}
        </>
    )
}