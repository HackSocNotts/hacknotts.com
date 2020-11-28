import { Link } from "gatsby"
import React, { useState } from "react"
import logoRed from "../../static/logo/logoRed.png"
import bruceFaceWink from "../../static/bruce/bruce_facewink.png";
import bruceFaceNeutral from "../../static/bruce/bruce_faceneutral.png";
import { Nav, Navbar } from "react-bootstrap"
import { Helmet } from "react-helmet";

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
    <Navbar bg="dark" variant="dark" expand="md" fixed={props.fixed ?? ""}>
      <Navbar.Brand as={Link} to="/" getProps={getCurrent("/")}>
        <img
          src={logoRed}
          alt="HackNotts Logo"
          height="30"
          className="d-inline-black align-top"
          loading="lazy"
        />
      </Navbar.Brand>
      <Navbar.Toggle data-toggle="collapse" data-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" label="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            eventKey="1"
            as={Link}
            to="/#about"
            getProps={getCurrent("/#about")}
            active={current === "/#about"}
          >
            About
          </Nav.Link>
          <Nav.Link
            eventKey="2"
            as={Link}
            to="/#schedule"
            getProps={getCurrent("/#schedule")}
            active={current === "/#schedule"}
          >
            Schedule
          </Nav.Link>
          <Nav.Link
            eventKey="3"
            as={Link}
            to="/#sponsors"
            getProps={getCurrent("/#sponsors")}
            active={current === "/#sponsors"}
          >
            Sponsors
          </Nav.Link>
          <Nav.Link
            eventKey="4"
            as={Link}
            to="/#partners"
            getProps={getCurrent("/#partners")}
            active={current === "/#partners"}
          >
            Partners
          </Nav.Link>
          <Nav.Link
            eventKey="5"
            as={Link}
            to="/#team"
            getProps={getCurrent("/#team")}
            active={current === "/#team"}
          >
            Team
          </Nav.Link>
          <Nav.Link
            eventKey="6"
            as={Link}
            to="/ssbu-tournament-rules"
            getProps={getCurrent("/ssbu-tournament-rules")}
            active={current === "/ssbu-tournament-rules"}
          >
            Super Smash Bros. Tournament Rules
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <a
        href="https://twitter.com/BruceBernardII"
        class="hideimage-1"
        aria-label="Link to Bruce Bernard the second's Twitter Page"
      >
        <img
          src={bruceFace}
          alt="Bruce"
          height="40"
          className="d-inline-black align-top"
          loading="lazy"
          onMouseEnter={e => setBruceFace(bruceFaceWink)}
          onMouseLeave={e => setBruceFace(bruceFaceNeutral)}
          role="presentation"
        />
      </a>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@300&display=swap" rel="stylesheet"/>
      </Helmet>
    </Navbar>
  )
}

export default NavBar
