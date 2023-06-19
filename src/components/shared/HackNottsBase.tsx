import {useEffect, useReducer, useState} from "react";
import {ToggleButton, Container, Navbar, ToggleButtonGroup, Button} from "react-bootstrap";
import logo from "@assets/react.svg"
import {useColorMode, ColorMode} from "@utils/ColorModeContext.tsx";

interface HackNottsBaseProps {
    children: JSX.Element[] | JSX.Element
}

const colorModes : ColorMode[] = ["micro", "spectrum"]

function HackNottsBase(props : HackNottsBaseProps): JSX.Element {
    const [colorMode, setColorMode] = useColorMode()
    const [currentColorModeIndex, setCurrentColourModeIndex] = useState(Math.max(colorModes.indexOf(colorMode), 0))
    
    const handleNextColorMode = function () {
        setCurrentColourModeIndex(x => (x + 1) % colorModes.length)
    }
    
    useEffect(() => {
        setColorMode(colorModes[currentColorModeIndex])
    }, [currentColorModeIndex])
    
    return <>
        <Navbar bg="">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    HackNotts 1984
                </Navbar.Brand>
                <Button
                    variant="primary"
                    onClick={handleNextColorMode}
                >
                    {colorModes[currentColorModeIndex] as string}
                </Button>
            </Container>
        </Navbar>
        {props.children}
    </>
}

export default HackNottsBase
export type { HackNottsBaseProps }