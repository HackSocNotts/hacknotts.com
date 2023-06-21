import {Container, Stack} from "react-bootstrap";

interface HackNottsFooterProps {
}

function HackNottsFooter(props: HackNottsFooterProps) : JSX.Element {
    return <footer className="bg-primary w-100">
        <Container className="pt-5 pb-5">
            <Stack className="align-items-stretch">
                {/*<Nav fill>*/}
                {/*    <Nav.Item>*/}
                {/*        <Nav.Link href="/safeguarding" className="link-light">*/}
                {/*            Safeguarding*/}
                {/*        </Nav.Link>*/}
                {/*    </Nav.Item>*/}
                {/*    <Nav.Item>*/}
                {/*        <Nav.Link href="/training-policy.pdf" className="link-light">*/}
                {/*            Training Policy*/}
                {/*        </Nav.Link>*/}
                {/*    </Nav.Item>*/}
                {/*    <Nav.Item>*/}
                {/*        <Nav.Link href="/contact-us" className="link-light">*/}
                {/*            Contact Us*/}
                {/*        </Nav.Link>*/}
                {/*    </Nav.Item>*/}
                {/*</Nav>*/}
                {/*<div className="d-flex flex-column align-items-center">*/}
                {/*    <Nav>*/}
                {/*        <Nav.Item>*/}
                {/*            <Nav.Link href="https://twitter.com/kaizen_anil_mbb" target="_blank" className="link-light">*/}
                {/*                <FontAwesomeIcon icon={faTwitter}/>*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*        <Nav.Item className="link-light">*/}
                {/*            <Nav.Link href="https://www.linkedin.com/company/lean-enabled-group/" target="_blank"*/}
                {/*                className="link-light">*/}
                {/*                <FontAwesomeIcon icon={faLinkedin}/>*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*        <Nav.Item>*/}
                {/*            <Nav.Link href="https://www.youtube.com/@leanenabled3924" target="_blank"*/}
                {/*                className="link-light">*/}
                {/*                <FontAwesomeIcon icon={faYoutube}/>*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*    </Nav>*/}
                {/*</div>*/}
                {/*<div className="d-flex flex-column align-items-center">*/}
                {/*    <Nav>*/}
                {/*        <Nav.Item>*/}
                {/*            <Nav.Link className="link-light">*/}
                {/*                <FontAwesomeIcon icon={faBuilding} href="https://goo.gl/maps/rAMjHszfKLkRfpbT8"/> Lean*/}
                {/*                Enabled Group, 124 City Road, London, EC1V 2NX.*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*        <Nav.Item>*/}
                {/*            <Nav.Link href="tel:02039077717" className="link-light">*/}
                {/*                <FontAwesomeIcon icon={faPhone}/> (0203) 907 7717*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*    </Nav>*/}
                {/*</div>*/}
                <div className="text-center text-light">
                    Footer placeholder text
                </div>
            </Stack>
        </Container>
    </footer>
}

export default HackNottsFooter
export type {HackNottsFooterProps}