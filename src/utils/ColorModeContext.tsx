import {createContext, useContext, useEffect, useState} from "react";

type ColorMode = "light" | "dark"

const ColorModeContext = createContext<ColorMode>("micro" as ColorMode)
const ColorModeDispatchContext = createContext<(colorMode: ColorMode) => void>(() => {})

function useColorMode(): [ColorMode, (colorMode: ColorMode) => void] {
    return [useContext(ColorModeContext), useContext(ColorModeDispatchContext)]
}

interface ColorModeProviderProps {
    children: JSX.Element[] | JSX.Element
}

function ColorModeProvider(props: ColorModeProviderProps) : JSX.Element {
    const [colorMode, setColorMode] = useState("micro" as ColorMode)
    
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", colorMode)
    }, [colorMode])
    
    return <ColorModeContext.Provider value={colorMode}>
    <ColorModeDispatchContext.Provider value={setColorMode}>
        {props.children}
    </ColorModeDispatchContext.Provider>
    </ColorModeContext.Provider>
}

export {ColorModeProvider, useColorMode}
export type {ColorMode}