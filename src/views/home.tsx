import HackNottsDecoratedPage from '@components/shared/HackNottsDecoratedPage.tsx'
import {Col, Container, Row, Stack} from "react-bootstrap";
import { animated, useSpring } from "@react-spring/web";
// import prizeImage from "@assets/rtx-4080-review-07.jpg"
import beeb from "@assets/beeb.png"
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

    return <HackNottsDecoratedPage>
        <Container className="mt-3 mb-3" style={{backgroundImage: `url(${beeb})`, backgroundPosition: "50% 40%", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            <Col className="text-dark d-flex flex-column">
                <Row className="w-100">
                    <Col>
                        <h4 className="fw-bolder">Nottingham's Premier Hackathon!</h4>
                        <h6>
                            <span className="bg-light">
                                Volume. 9 No. 2<br/>
                                <span className="fw-bold h5">November 4<span className="small">th</span> & 5<span className="small">th</span></span>
                            </span>
                        </h6>
                    </Col>
                    <Col className="d-md-flex flex-row-reverse d-none">
                        <animated.a
                            className="border-0 p-0 right-chevron text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                            onMouseEnter={handleMouseEnterPrizes}
                            onMouseLeave={handleMouseLeavePrizes}
                            href="/#prizes"
                            style={{backgroundColor: "white", height: 200, width: 200, ...prizeSprings}}>
                            <Stack gap={3} className="align-items-center h-100">
                                <div className="w-100 bg-dark text-light text-center d-flex flex-row align-items-center">
                                    <div style={{width: "90%"}}>
                                        <h1 style={{fontSize: 80}} className="m-0 w-100">?</h1>
                                    </div>
                                </div>
                                {/* <div className="bg-primary w-100 h-50" style={{backgroundImage: `url(${prizeImage})`, backgroundPosition: "50% 50%",  backgroundSize: "cover"}}></div> */}
                                <div className="w-100 text-center d-flex flex-row align-items-center">
                                    <div style={{width: "90%"}}>
                                        <h5 className="fw-bolder m-3">Win Fabulous Prizes!</h5>
                                    </div>
                                </div>
                            </Stack>
                        </animated.a>
                    </Col>
                </Row>
                <Row className="flex-grow-1" style={{minHeight: "30vh"}}>
                    <Stack gap={1} className="justify-content-end" style={{maxWidth: "20rem"}}>
                        <h6 className="text-muted fw-bolder"><span className="bg-light">Open to all</span></h6>
                        <h6 style={{width: "auto"}} className="text-muted fw-bolder">
                            <span className="bg-light">Build your own<br />Anything!</span>
                        </h6>
                        <h5 style={{width: "auto"}} className="fw-bolder">
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
                        className="text-decoration-none bg-primary right-chevron p-3 m-2 d-flex flex-row border-0 align-items-center"
                        style={{
                            width:"auto",
                            ...ticketSprings
                        }}
                        href="/#tickets">
                        <h2 className="text-secondary text-start text-nowrap comic m-0 me-4">
                            <span className="fw-bolder fst-italic">Free Tickets!</span><br/>
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
                    <div className="flex-grow-1 d-flex flex-row align-items-stretch justify-content-end">
                        <div className="h-100 d-flex flex-column text-center text-capitalize justify-content-between mx-3">
                            <p className="m-0" style={{fontSize: "1.1rem"}}>HACKSOC NOTTINGHAM</p>
                            <p className="m-0" style={{fontSize: "1rem"}}>MICROCOMPUTER SYSTEM</p>
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