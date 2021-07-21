import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// ui comps
import LogOutButton from "../views/buttons/logOutButton";
// ui Elements
import AppLogo from "../assets/appLogo";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
// store
import { setCurrentMediaView } from "../../../store/appContext";

const Navigation = () => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.appContext.currentMediaView
  );
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );
  const currentUser = localStorage.getItem("name");
  let userIsLoggedIn = useSelector((state) => state.users.userIsLoggedIn);

  const [selected, setSelected] = useState(currentMediaView);
  const dispatch = useDispatch();
  ///
  const setNewMediaView = (e) => {
    setSelected(e.target.value);
    dispatch(setCurrentMediaView(e.target.value));
  };

  const categories = [
    "Analog Audio",
    "Digital Audio",
    "Book",
    "Video",
    "Graphic",
    "Game",
  ];

  const CurrentUserName = () => (
    <span>
      Hello <br />
      <span className="text-info">{currentUser}</span>
    </span>
  );

  const NavBarRead = () => (
    <>
      <Navbar bg="dark" variant="dark" className="m-0 p-0">
        <div>
          {categories.map((c) => (
            <Button
              key={c}
              className="m-1"
              variant={selected === c ? "light" : "dark"}
              value={c}
              onClick={setNewMediaView}
            >
              {c}
            </Button>
          ))}
        </div>
      </Navbar>
    </>
  );

  const NavBarCRUD = () => (
    <Navbar bg="dark" variant="dark">
      <div className="ml-5">
        {currentMediaCRUD === "create" ? (
          <h4 className="text-light">Add</h4>
        ) : null}
        {currentMediaCRUD === "delete" ? (
          <h4 className="text-light">Delete</h4>
        ) : null}
        {currentMediaCRUD === "update" ? (
          <h4 className="text-light">Update</h4>
        ) : null}
        {currentMediaCRUD === "enter" ? (
          <h4 className="text-light">Update</h4>
        ) : null}
      </div>
    </Navbar>
  );

  const NavBarUserOffline = () => (
    <h4 className="text-light">Enter Application</h4>
  );

  const NavBarUserOnline = () => (
    <> {currentMediaCRUD === "read" ? <NavBarRead /> : <NavBarCRUD />}</>
  );

  // * view
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col xs={2} md={1} lg={1}>
          <AppLogo bg="dark" variant="dark" extraStyle={{}} />
        </Col>
        <Col xs={10} md={9} lg={9} className="m-0 p-0">
          {userIsLoggedIn === false ? (
            <NavBarUserOffline />
          ) : (
            <NavBarUserOnline />
          )}
        </Col>
        <Col xs={6} md={1} lg={1}>
          {userIsLoggedIn ? <CurrentUserName /> : null}
        </Col>
        <Col xs={6} md={1} lg={1}>
          {userIsLoggedIn ? <LogOutButton /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
