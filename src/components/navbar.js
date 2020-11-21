import { Link } from "gatsby"
import React, { useState } from "react"
import logoRed from "../../static/logo/logoRed.png"
import bruceFaceWink from "../../static/bruce/bruce_facewink.png";
import bruceFaceNeutral from "../../static/bruce/bruce_faceneutral.png";
import { Nav, Navbar } from "react-bootstrap"

const scrollTo = id => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 50)
  return false
}

const NavBar = (props) => {
  const [current, setCurrent] = useState("")
  const [bruceFace, setBruceFace] = useState(bruceFaceNeutral)

  const getCurrent = href => ({ isCurrent, location }) => {
    const hash = href.split("#")[1]
    if (
      (location.hash === "" && isCurrent) ||
      (location.hash === `#${hash}` && location.hash !== "" && current !== href)
    ) {
      setCurrent(href)
      if (location.hash) {
        window.setTimeout(scrollTo(location.hash), 10)
      }
    }
  }

  return (
    <Navbar bg="dark" variant="dark" fixed={props.fixed ?? ""}>
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
            to="/#about"
            getProps={getCurrent("/#about")}
            active={current === "/#about"}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/#schedule"
            getProps={getCurrent("/#schedule")}
            active={current === "/#schedule"}
          >
            Schedule
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/#sponsors"
            getProps={getCurrent("/#sponsors")}
            active={current === "/#sponsors"}
          >
            Sponsors
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/#partners"
            getProps={getCurrent("/#partners")}
            active={current === "/#partners"}
          >
            Partners
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/#team"
            getProps={getCurrent("/#team")}
            active={current === "/#team"}
          >
            Team
          </Nav.Link>
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
      <a href="https://twitter.com/BruceBernardII">
        <img
          src={bruceFace}
          alt="Bruce"
          height="40"
          className="d-inline-black align-top"
          loading="lazy"
          onMouseEnter={e => setBruceFace(bruceFaceWink)}
          onMouseLeave={e => setBruceFace(bruceFaceNeutral)}
        />
      </a>
    </Navbar>
  )
}

export default NavBar
