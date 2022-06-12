import './Phonebook.css';
import Header from './Header';
const Phonebook = ()=>{
    return(
  <>
  <div className="wrapper">
  <header>
 {/* <h1 id="title">Contact Book</h1> */}
    <Header/>  
    </header>      
  <form id="headFrm">    
    <div id="ss">                          
                <p className="pp">Search By :</p>
                
                
                <input type="radio" id="searchBy1" name="name1"/>
                <label htmlFor="searchBy1">        Name     </label>
                <input type="radio" id="searchBy2" name="name1"/>              
                <label htmlFor="searchBy2">         Phone      </label>
                
                    
               <input type="radio" id="searchBy2" name="name2"/>
                <label htmlFor="searchBy2">Phone</label>
            </div>
                <input type="text" name="search" id="searchContact" placeholder="Search Here..."required/>
                    <br/><br/>
                        </form>
                     
<main>
                        <h2>Add Contact</h2>
            <form id="frm" name="info" >
                <br/>
                <input  type="text" name="contactName" className="addContact" id="name" placeholder="NAME"/><br/><br/>
                <input  type="tel" name="contactNo"  className="addContact" id="phone" placeholder="PHONE"/><br/><br/>
                <input type="submit" id="addCont" name="go"/>
                <p style={{color:"red",fontStyle:"italic",fontSize:25,display: "none"}}>Missing Details...</p>
            </form>
        <br/>
        <table id='contacts'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tbdy">
                    <tr id="contInfo" >
                        
                    </tr>

                </tbody>

            </table>
            </main>
            </div>

            <div id="popup">
        <p>Your Phone No appears to be invalid </p>
        <p>Make sure you are using this format "03175115059"</p>
        <button type="button" id="ok">OK</button>
    </div>
    <div id="confirm">
            <p>Are you sure you wanna delete this contact</p>
            <button type="button" id="yesbtn">YES</button>
            <button type="button" id="nobtn">No</button>
    </div>
    <div id="existsup">
        <p>The Phone Number you entered already Exists</p>
        <button type="button" id="eok">OK</button>
    </div>            
  </>
    )
}
export default Phonebook