import {Container, Stack} from "react-bootstrap";

interface HackNottsFooterProps {
}

function HackNottsFooter(_props: HackNottsFooterProps) : JSX.Element {
    return <footer className="bg-primary w-100">
        <Container className="pt-3 pb-3 d-flex flex-column" style={{minHeight: 180}}>
            <Stack className="align-items-stretch">
                <h4 className="text-center text-light">
                    HackNotts 2024
                </h4>
                <h6 className="text-center text-secondary">
                    November 4<small>th</small> & 5<small>th</small>
                </h6>
            </Stack>
            <div className="text-secondary">
                <h6>&copy; <a className="text-light text-decoration-none" href="https://hacksoc.net/">HackSoc Nottingham</a></h6>
                <h6><a className="text-light text-decoration-underline" href="https://github.com/HackSocNotts/hacknotts.com">This site's source code</a> (MIT licensed)</h6>
            </div>
        </Container>
    </footer>
}

export default HackNottsFooter
export type {HackNottsFooterProps}