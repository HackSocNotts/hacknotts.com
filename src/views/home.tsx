import HackNottsDecoratedPage from '@components/shared/HackNottsDecoratedPage.tsx'
import {Col, Container, Row, Stack} from "react-bootstrap";
import prizeImage from "@assets/rtx-4080-review-07.jpg"
import beeb from "@assets/PNG_transparency_demonstration_1.png"
import beebOwl from "@assets/beeb-owl.png"

export default function Home() {
    return <HackNottsDecoratedPage>
        <Container className="mt-3 mb-3" style={{backgroundImage: `url(${beeb})`, backgroundPosition: "50% 50%", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            <Col className="text-dark d-flex flex-column" style={{minHeight: "70vh"}}>
                <Row className="w-100">
                    <Col>
                        <h6>
                            Volume. 9 No. 2<br/>
                            <span className="fw-bold h5">November 4<span className="small">th</span> & 5<span className="small">th</span></span>
                        </h6>
                    </Col>
                    <Col className="d-flex flex-row-reverse">
                        <div className="right-chevron" style={{backgroundColor: "white", height: 200, width: 200}}>
                            <Stack gap={3} className="align-items-center h-100">
                                <div className="bg-primary w-100 h-50" style={{backgroundImage: `url(${prizeImage})`, backgroundPosition: "50% 50%",  backgroundSize: "cover"}}></div>
                                <h5 className="fw-bolder m-3">Win Fabulous Prizes!</h5>
                            </Stack>
                        </div>
                    </Col>
                </Row>
                <Row className="flex-grow-1 ">
                    <Stack gap={1} style={{width: 100}} className="justify-content-end">
                        <h6>Nottingham's Premier hackathon</h6>
                        <h6>Open to all</h6>
                        <h6>Build your own Anything!</h6>
                    </Stack>
                </Row>
                <Row>
                    <div className="bg-primary right-chevron m-2 d-flex align-items-center" style={{height: 90, width:300}}>
                        <h2 className="text-secondary text-nowrap comic m-0">
                            <span className="fw-bolder fst-italic">Free Tickets!</span><br/>
                            <span className="h5">Get yours now!</span>
                        </h2>
                    </div>
                </Row>
            </Col>
        </Container>
        <div style={{backgroundColor: "black"}}>
            <Container className="pt-3 pb-3 h-100">
                <Row>
                    <Col>
                        <Stack className="h-100 align-items-stretch" style={{minHeight: 80}} direction="horizontal" gap={2}>
                            <div style={{borderRadius: 100, border: "4px solid", width: 16}} />
                            <div style={{borderRadius: 100, border: "4px solid", width: 16}} />
                            <div style={{borderRadius: 100, border: "4px solid", width: 16}} />
                            <div style={{borderRadius: 100, border: "4px solid", width: 16}} />
                        </Stack>
                    </Col>
                    <Col>
                        <div className="h-100 d-flex flex-row align-items-stretch justify-content-end ">
                            <div className="h-100 d-flex flex-column text-center text-capitalize justify-content-between mx-3">
                                <h6 className="m-0">BRITISH BROADCASTING CORPORATION</h6>
                                <h3 className="m-0">MICROCOMPUTER SYSTEM</h3>
                            </div>
                            <img height={80} className="object-fit-contain" alt="" src={beebOwl}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
            <div className="border-dark my-3" style={{border: "4px solid", borderRadius: 16}}>
                <h1 className="m-3 text-dark text-center text-capitalize">SOME CONTENT</h1>
            </div>
            <div className="text-dark">
                <p>The quick brown fox jumps over the lazy dog.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet, lectus ac semper scelerisque, mauris quam ullamcorper enim, sed scelerisque mauris eros nec quam.</p>
                <p>Sed ultricies, mauris ac scelerisque faucibus, quam enim semper eros, vel semper lectus quam in quam. Donec ac enim mauris.</p>
                <p>Quisque sit amet mauris sed lectus scelerisque semper. Aliquam erat volutpat. Donec semper, mauris ac semper scelerisque, quam enim semper eros, vel semper lectus quam in quam.</p>
                <p>Etiam nec mauris ac lectus scelerisque semper. Aliquam erat volutpat. Donec semper, mauris ac semper scelerisque, quam enim semper eros, vel semper lectus quam in quam.</p>
            </div>
        </Container>
    </HackNottsDecoratedPage>
}