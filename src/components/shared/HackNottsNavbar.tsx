// import {useEffect, useState} from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import {ReactComponent as HackNottsLogo} from "@assets/hacknotts_beeb_logo.svg"
import { ReactComponent as HackNottsStackedLogo } from "@assets/hacknotts_stacked_logo.svg";
// import {useColorMode, ColorMode} from "@utils/ColorModeContext.tsx";

interface HackNottsBaseProps {
    hideTitle?: boolean;
    titleBreakpoint?: "xs" | "md" | "lg";
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
    
    return <Navbar expand={props.hideTitle ? "sm": "lg"} bg="light" variant="light" sticky="top" className="w-100">
        <Container className={`w-100 ${props.hideTitle ? "flex-row-reverse" : "flex-row"}`}>
            {!props.hideTitle ? <Navbar.Brand href="/" className="d-flex flex-nowrap align-items-center">
                <div className={`d-block d-sm-none d-${props.titleBreakpoint}-none`}>
                    <HackNottsStackedLogo style={{maxHeight:"2rem"}}/>
                </div>
                <div className={`d-none d-sm-block d-${props.titleBreakpoint}-none`}>
                    <HackNottsLogo aria-label="HackNotts Home" style={{maxHeight:"4rem", height:"100%"}}/>
                </div>
            </Navbar.Brand> : null}
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
                    <Button href="/#tickets" className="m-1 bg-gradient text-primary border-0 comic fw-bolder" style={{fontSize: "1.1rem"}}>Get Tickets</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default HackNottsNavbar
export type { HackNottsBaseProps }