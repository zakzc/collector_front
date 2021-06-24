import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";

const DashBar = () => {
  return (
    <Navbar
      fluid="*"
      bg="dark"
      variant="dark"
      expand="sm"
      className="h-100 mt-0 mb-0"
    >
      <div>
        <ul className="nav flex-column">
          <NavbarBrand className="fixed-top">
            <div className="infoText">Logo</div>
          </NavbarBrand>
          <h5 className="infoText">My Collections</h5>
          <Nav.Link href="/audioOverview" className="text-white">
            Audio
          </Nav.Link>
          <Nav.Link href="/mediaOverview" className="text-white">
            Medias
          </Nav.Link>
          <h5 className="infoText">My data</h5>
          <NavDropdown
            title={<span className="text-white">User</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item>Name: JOHN SMITH</NavDropdown.Item>
            <NavDropdown.Item>Email: "jasdf@asdf"</NavDropdown.Item>
          </NavDropdown>
        </ul>
        <a className="nav-link text-warning" href="/hereSomewhere">
          Log out
        </a>
      </div>
    </Navbar>
  );
};

export default DashBar;
