// import {useEffect, useState} from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import {ReactComponent as HackNottsLogo} from "@assets/hacknotts_beeb_logo.svg"
// import {useColorMode, ColorMode} from "@utils/ColorModeContext.tsx";

interface HackNottsBaseProps {
}

// const colorModes : ColorMode[] = ["light", "dark"]

function HackNottsNavbar(props : HackNottsBaseProps): JSX.Element {
    // const [colorMode, setColorMode] = useColorMode()
    // const [currentColorModeIndex, setCurrentColourModeIndex] = useState(Math.max(colorModes.indexOf(colorMode), 0))
    
    // const handleNextColorMode = function () {
    //     setCurrentColourModeIndex(x => (x + 1) % colorModes.length)
    // }
    
    // useEffect(() => {
    //     setColorMode(colorModes[currentColorModeIndex])
    // }, [currentColorModeIndex])
    
    return <Navbar expand="lg" bg="light" variant="light" sticky="top" className="w-100">
        <Container className="w-100">
            <Navbar.Brand href="/" className="d-flex flex-nowrap align-items-center">
                <HackNottsLogo style={{maxHeight:"1.6rem", width: "auto"}} className="logo text-primary"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="m-1" href="/sponsors">Sponsors</Nav.Link>
                    <Nav.Link className="m-1" href="/schedule">Schedule</Nav.Link>
                    <Nav.Link className="m-1" href="/about">About</Nav.Link>
                    <Nav.Link className="m-1" href="/faq">FAQ</Nav.Link>
                    {/*<Button onClick={handleNextColorMode}>*/}
                    {/*    {{"light": "MICRO", "dark": "SPECTRUM"}[colorModes[currentColorModeIndex]]}*/}
                    {/*</Button>*/}
                    <Button href="/#tickets" className="m-1 text-light">Get Tickets</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default HackNottsNavbar
export type { HackNottsBaseProps }