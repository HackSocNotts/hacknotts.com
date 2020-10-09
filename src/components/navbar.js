import { Link } from "gatsby"
import React, { useState } from "react"
import logoRed from "../../static/logo/logoRed.png"
import { Nav, Navbar } from "react-bootstrap"

const NavBar = () => {
  const [current, setCurrent] = useState("")

  const getCurrent = href => ({ isCurrent }) => {
    if (isCurrent && current !== href) {
      setCurrent(href)
    }
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" getProps={getCurrent("/")}>
        <img
          src={logoRed}
          alt="HackNotts Logo"
          height="30"
          className="d-inline-black align-top"
          loading="lazy"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={Link}
            to="/giveaway"
            getProps={getCurrent("/giveaway")}
            active={current === "/giveaway"}
          >
            Giveaway T&Cs
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
