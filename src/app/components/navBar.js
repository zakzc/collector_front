import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";

const DashBar = () => {
  return (
    <Navbar fluid="*" bg="dark" expand="sm" className="h-100 mt-0 mb-0">
      <div>
        <NavbarBrand href="#" className="fixed-top">
          <div className="text-warning">Logo</div>
        </NavbarBrand>
        <ul className="nav flex-column">
          <h7 className="text-warning">My Collections</h7>
          <NavDropdown
            title={<span className="text-white">Audio Collection</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action5">
              Check Collection
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Add</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Update</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Delete</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="text-white">Book Collection</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action5">
              Check Collection
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Add</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Update</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Delete</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="text-white">Graphic Collection</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action5">
              Check Collection
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Add</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Update</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Delete</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="text-white">Equipment Collection</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action5">
              Check Collection
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Add</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Update</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Delete</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="text-white">Media Collection</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action5">
              Check Collection
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Add</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Update</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Delete</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="text-white">Other collectibles</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action5">
              Check Collection
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Add</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Update</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Delete</NavDropdown.Item>
          </NavDropdown>
          <h7 className="text-warning">My data</h7>
          <NavDropdown
            title={<span className="text-white">User</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item>Name: JOHN SMITH</NavDropdown.Item>
            <NavDropdown.Item>Email: "jasdf@asdf"</NavDropdown.Item>
          </NavDropdown>
        </ul>
        <a className="nav-link text-warning" href="#">
          Log out
        </a>
      </div>
    </Navbar>
  );
};

export default DashBar;
