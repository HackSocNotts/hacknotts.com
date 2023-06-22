import HackNottsDecoratedPage from '@components/shared/HackNottsDecoratedPage.tsx'
import {Col, Container, Row, Stack} from "react-bootstrap";
import { animated, useSpring } from "@react-spring/web";
import prizeImage from "@assets/rtx-4080-review-07.jpg"
import {ReactComponent as HackNottsStackedLogo} from "@assets/hacknotts_stacked_logo.svg"
import {ReactComponent as HackNottsLogo} from "@assets/hacknotts_logo.svg"
import HackNottsSectionHeader from '@components/shared/HackNottsSectionHeader';

export default function Home() {
    const [ticketSprings, ticketApi] = useSpring(() => ({
        from: { x: 0 }
    }))

    const [prizeSprings, prizeApi] = useSpring(() => ({
        from: { x: 0 }
    }))

    const handleMouseEnterTickets = () => {
        ticketApi.start({
            from: {
                x: 0,
            },
            to: {
                x: 20,
            },
        })
    }

    const handleMouseLeaveTickets = () => {
        ticketApi.start({
            from: {
                x: 20,
            },
            to: {
                x: 0,
            },
        })
    }

    const handleMouseEnterPrizes = () => {
        prizeApi.start({
            from: {
                x: 0,
            },
            to: {
                x: -20,
            },
        })
    }

    const handleMouseLeavePrizes = () => {
        prizeApi.start({
            from: {
                x: -20,
            },
            to: {
                x: 0,
            },
        })
    }

    return <HackNottsDecoratedPage hideTitle={true}>
        <Container className="mt-3 mb-3 beeb-back">
            <Col className="text-dark d-flex flex-column align-items-stretch">
                <Row>
                    <Col>
                        <HackNottsStackedLogo className="h-auto text-primary mb-3" style={{maxWidth: "60vw"}}/>
                        <h4 className="fw-bolder">Nottingham's Premier<br/>Hackathon!</h4>
                        <h6>
                            <span className="bg-light">
                                Volume. 9 No. 2<br/>
                                <span className="fw-bold h5">November 4<span className="small">th</span> & 5<span className="small">th</span></span>
                            </span>
                        </h6>
                    </Col>
                    <Col className="d-md-flex flex-row-reverse d-none mx-1">
                        <animated.a
                            className="border-0 p-0 bg-dark prize-chevron text-decoration-none d-flex flex-column align-items-stretch"
                            onMouseEnter={handleMouseEnterPrizes}
                            onMouseLeave={handleMouseLeavePrizes}
                            href="/#prizes"
                            style={{maxWidth: 200, height: 200, ...prizeSprings}}>
                            <div className="h-50 p-3 m-0 text-light text-center d-flex flex-row align-items-center" style={{backgroundImage: `url(${prizeImage})`, backgroundPosition: "50% 50%",  backgroundSize: "cover"}}>
                                <h1 style={{fontSize: 90}} className="w-100 m-0 ms-4">?</h1>
                            </div>
                            <div className="h-50 p-3 m-0 text-center text-light d-flex flex-row align-items-center">
                                <h5 className="w-100 m-0 ms-4">Win Fabulous Prizes!</h5>
                            </div>
                        </animated.a>
                    </Col>
                </Row>
                <Row className="flex-grow-1" style={{minHeight: "30vh"}}>
                    <Stack gap={1} className="justify-content-end" style={{maxWidth: "20rem"}}>
                        <h5 className="fw-bolder">
                            <span className="bg-light">
                                University of Nottingham<br />
                                Computer Science Department<br/>
                                Room A32
                            </span>
                        </h5>
                    </Stack>
                </Row>
                <Row>
                    <animated.a
                        onMouseEnter={handleMouseEnterTickets}
                        onMouseLeave={handleMouseLeaveTickets}
                        className="w-auto text-decoration-none bg-primary right-chevron p-3 m-2 d-flex flex-row border-0 align-items-center"
                        style={ticketSprings}
                        href="/#tickets">
                        <h2 className="text-secondary text-start text-nowrap m-0 me-4">
                            <span className="fw-bolder fst-italic comic">Free Tickets!</span><br/>
                            <span className="h5">Get yours now!</span>
                        </h2>
                    </animated.a>
                </Row>
            </Col>
        </Container>
        <div className="bg-dark text-light my-3">
            <Container className="pt-3 pb-3 h-100">
                <div className="d-flex flex-row h-100 flex-nowrap align-items-stretch">
                    <Stack className="align-items-stretch" direction="horizontal" gap={2}>
                        <div style={{borderRadius: 100, border: "4px solid", width: 16}} />
                        <div style={{borderRadius: 100, border: "4px solid", width: 16}} />
                        <div style={{borderRadius: 100, border: "4px solid", width: 16}} />
                        <div style={{borderRadius: 100, border: "4px solid", width: 16}} />
                    </Stack>
                    <div className="flex-grow-1 d-flex flex-row align-items-center justify-content-end">
                        <div className="h-100 d-flex flex-column text-center text-uppercase justify-content-between mx-3">
                            <p className="m-0" style={{fontSize: "1.1rem"}}>HackSoc Nottingham</p>
                            <p className="m-0" style={{fontSize: "1rem"}}>Microcomputer System</p>
                        </div>
                        <HackNottsLogo className="text-light m-0" style={{maxHeight: 80, width: "auto"}}/>
                    </div>
                </div>
            </Container>
        </div>
        <Container>
            <p className='lead text-muted'><b>HackNotts</b> is a 24 hour hackathon brought to you by <a href="https://hacksocnotts.co.uk/" target="_blank">HackSoc</a>. Our other Sponsors can be found <a href="./sponsors">here</a>. Tickets are free! They can be found at the bottom of this page!</p>
        </Container>
        <Stack gap={2} className="mb-3">
            <Container>
                <HackNottsSectionHeader id="what-is-hacknotts" title="What is HackNotts?" />
                <div>
                    <p>You will have 24 hours to design, coordinate and execute an idea. Each year we have students travel from across the far ends of the country collaborating, prototyping, and accomplishing amazing and innovative ideas in just 24 hours.</p>
                    <p>You'll learn new skills from both the many attendees and the informative workshops hosted by the sponsors and organisers.</p>
                    <p>You don't have to be a software or hardware wizard to attend. No matter your skill level you will be able to brainstorm and produce something and hopefully learn along the way.</p>
                    <p>Have a look at the <a href="/about">About</a> page to find out more information about what the Hackathon involves.</p>
                </div>
            </Container>
            <Container>
                <HackNottsSectionHeader id="prizes" title="Prizes" />
                <div className="text-dark">
                    <p>We have various prizes you'll to want to win in several categories:</p>
                    <ul>
                        <li><b>First place</b> - TBD</li>
                    </ul>
                </div>
            </Container>
            <Container>
                <HackNottsSectionHeader id="tickets" title="Tickets" />
                <div>TBD</div>
            </Container>
        </Stack>
    </HackNottsDecoratedPage>
}