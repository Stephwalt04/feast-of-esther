import { React } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from "../Images/FEASTOFESTHERIMAGES/logo.jpeg";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <Container fluid className=" sticky-top" sticky="top">
        <Container>
          <Navbar
            expand="lg"
            variant="light"
            className="nav has-sticky sticky-jump"
            sticky="top"
          >
            <Navbar.Brand>
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top rounded-pill board"
                alt="Logo"
              />
            </Navbar.Brand>
            <p className="feel">Feast Of Esther NA</p>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto navs">
               
                <Link to={"/"} className="name">
                  <Nav.Link href="/" className="ink">
                    Home
                  </Nav.Link>
                </Link>
                
                <Link to={"/about"} className="name">
                  <Nav.Link href="/about" className="ink">
                    About Us
                  </Nav.Link>
                </Link>
                
                <Link to={"/founder"} className="name">
                  <Nav.Link href="/founder" className="ink">
                    The Founder
                  </Nav.Link>
                </Link>
                
                <Link to={"/events"} className="name">
                  <Nav.Link href="/events" className="ink">
                    Events
                  </Nav.Link>
                </Link>
                

                <Link to={"/registration"} className="name">
                  <Nav.Link href="/registration" className="ink">
                    Registration Form
                  </Nav.Link>
                </Link>
               
                <Link to={"/donate"} className="name">
                  <Nav.Link href="/donate" className="ink">
                    Donate
                  </Nav.Link>
                </Link>
               
                <Link to={"/contact"} className="name">
                  <Nav.Link href="/contact" className="ink">
                    Contact
                  </Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
 
    </>
  );
};

export default NavigationBar;
