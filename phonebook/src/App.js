import './App.css';

import { Navbar } from './component/Navbar/Navbar';
import {ContactList} from './component/contacts/ContactList/ContactList';             
import {AddContact} from './component/contacts/AddContact/AddContact';           
import {EditContact} from './component/contacts/EditContact/EditContact';         
import {ViewContact} from './component/contacts/ViewContact/ViewContact'; 
import { ContactName } from './component/contacts/ContactName/ContactName';         
import { useState } from 'react';                   
// import {Navbar, Nav, Container} from 'react-bootstrap';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"        

function App(props) {
  const [contacts, setContact] = useState(ContactName)
  return (
    <div className="App">
      <>

      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contact/list'}/>}/>
        <Route path={'/contact/List'} element={<ContactList contacts={contacts} setContact={setContact}/>}/>
        <Route path={'/contact/Add'} element={<AddContact contacts={contacts} setContact={setContact}/>}/>
        <Route path={'/contact/Edit'} element={<EditContact/>}/>
        <Route path={'/contact/View/:contactId'} element={<ViewContact/>}/>
      </Routes>

      </>
    </div>
  );
}

export default App;
