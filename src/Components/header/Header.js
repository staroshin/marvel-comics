import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import './nav.css';



function Header(props) {
    return (
    <>

<Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={props.image} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
          <nav class="navbar ms-auto">
    <div class = "nav-items">


    <div class = "nav-item">
    <NavLink to ="/">Home
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/comics" >Comics
    </NavLink>
    </div>
    
    <div class = "nav-item">
    <NavLink to="/series">Series
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/offers">Characters
    </NavLink>
    </div>

     <div class = "nav-item">
    <NavLink to="/restaurant">Events
    </NavLink>
    </div>

    


  


</div>
</nav>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Navbar>
    <Container>


      
       





  
     
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;