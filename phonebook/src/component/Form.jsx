import './Phonebook.css'
export const Form = ({users, setUser, setUsers, user})=>{
   
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

        </>
    )
}