import {Container, Navbar, Nav} from 'react-bootstrap'
const Header = ()=>{
    return(
        <>
   <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">PHONE BOOK</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Contacts</Nav.Link>
        <Nav.Link href="#link">New contact</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default Header