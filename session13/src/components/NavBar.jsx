import React from "react";
import { Container, Col, Row } from "react-bootstrap";
const NavBar = () => {
    return (
        <div className="nav-style w-100">
        <Container className="py-4">
            <Row className="pt-2 align-items-center">
            <Col xs="2" lg="1">
                <a
                href={"/"}
                className="logo-style"
                style={{ fontSize: "40px;", fontWeight: "bold;" }}
                >
                Logo
                </a>
            </Col>
            <Col xs="6" lg="7" className=" d-flex align-items-center">
                <div className="search  w-100">
                <img
                    src={"/images/search_icon.svg"}
                    className="fa-search"
                    style={{ width: "17px" }}
                    alt="search_logo"
                ></img>
                <input
                    type="text"
                    id="input"
                    className="form-control"
                    placeholder="Search"
                />
                </div>
            </Col>
            <Col
                xs="4"
                lg="4"
                className="d-flex align-items-center justify-content-center"
            >
                <div className="nav-links d-flex justify-content-evenly text-white w-100">
                <a href="/movies-list-react-app/" className="nav-link">
                    Home
                </a>
                <a href="/movies-list-react-app/about" className="nav-link">
                    About
                </a>
                <a href="/movies-list-react-app/contact" className="nav-link">
                    Contact
                </a>
                <a href="/camera" className="nav-link">
                    Camera
                </a>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default NavBar;