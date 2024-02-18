import HackNottsDecoratedPage from "@components/shared/HackNottsDecoratedPage";
import HackNottsSectionHeader from "@components/shared/HackNottsSectionHeader";
import { ReactComponent as CC } from "@assets/cc.svg"
import { ReactComponent as Zero } from "@assets/zero.svg"

// god i wish there was an easier way of doing this
import Img1JPEG from "@assets/gallery/1/FINAL-50.jpg"
import Img1AVIF from "@assets/gallery/1/FINAL-50.avif"
import Img1WEBP from "@assets/gallery/1/FINAL-50.webp"
import Img2JPEG from "@assets/gallery/2/FINAL-50.jpg"
import Img2AVIF from "@assets/gallery/2/FINAL-50.avif"
import Img2WEBP from "@assets/gallery/2/FINAL-50.webp"
import Img3JPEG from "@assets/gallery/3/FINAL-50.jpg"
import Img3AVIF from "@assets/gallery/3/FINAL-50.avif"
import Img3WEBP from "@assets/gallery/3/FINAL-50.webp"
import Img4JPEG from "@assets/gallery/4/FINAL-50.jpg"
import Img4AVIF from "@assets/gallery/4/FINAL-50.avif"
import Img4WEBP from "@assets/gallery/4/FINAL-50.webp"
import Img5JPEG from "@assets/gallery/5/FINAL-50.jpg"
import Img5AVIF from "@assets/gallery/5/FINAL-50.avif"
import Img5WEBP from "@assets/gallery/5/FINAL-50.webp"
import Img6JPEG from "@assets/gallery/6/FINAL-50.jpg"
import Img6AVIF from "@assets/gallery/6/FINAL-50.avif"
import Img6WEBP from "@assets/gallery/6/FINAL-50.webp"
import Img7JPEG from "@assets/gallery/7/FINAL-50.jpg"
import Img7AVIF from "@assets/gallery/7/FINAL-50.avif"
import Img7WEBP from "@assets/gallery/7/FINAL-50.webp"
import Img8JPEG from "@assets/gallery/8/FINAL-50.jpg"
import Img8AVIF from "@assets/gallery/8/FINAL-50.avif"
import Img8WEBP from "@assets/gallery/8/FINAL-50.webp"
import Img9JPEG from "@assets/gallery/9/FINAL-50.jpg"
import Img9AVIF from "@assets/gallery/9/FINAL-50.avif"
import Img9WEBP from "@assets/gallery/9/FINAL-50.webp"
import Img10JPEG from "@assets/gallery/10/FINAL-50.jpg"
import Img10AVIF from "@assets/gallery/10/FINAL-50.avif"
import Img10WEBP from "@assets/gallery/10/FINAL-50.webp"
import Img11JPEG from "@assets/gallery/11/FINAL-50.jpg"
import Img11AVIF from "@assets/gallery/11/FINAL-50.avif"
import Img11WEBP from "@assets/gallery/11/FINAL-50.webp"
import Img12JPEG from "@assets/gallery/12/FINAL-50.jpg"
import Img12AVIF from "@assets/gallery/12/FINAL-50.avif"
import Img12WEBP from "@assets/gallery/12/FINAL-50.webp"
import Img13JPEG from "@assets/gallery/13/FINAL-50.jpg"
import Img13AVIF from "@assets/gallery/13/FINAL-50.avif"
import Img13WEBP from "@assets/gallery/13/FINAL-50.webp"
import Img14JPEG from "@assets/gallery/14/FINAL-50.jpg"
import Img14AVIF from "@assets/gallery/14/FINAL-50.avif"
import Img14WEBP from "@assets/gallery/14/FINAL-50.webp"
import Img15JPEG from "@assets/gallery/15/FINAL-50.jpg"
import Img15AVIF from "@assets/gallery/15/FINAL-50.avif"
import Img15WEBP from "@assets/gallery/15/FINAL-50.webp"
import Img16JPEG from "@assets/gallery/16/FINAL-50.jpg"
import Img16AVIF from "@assets/gallery/16/FINAL-50.avif"
import Img16WEBP from "@assets/gallery/16/FINAL-50.webp"
import Img17JPEG from "@assets/gallery/17/FINAL-50.jpg"
import Img17AVIF from "@assets/gallery/17/FINAL-50.avif"
import Img17WEBP from "@assets/gallery/17/FINAL-50.webp"
import Img18JPEG from "@assets/gallery/18/FINAL-50.jpg"
import Img18AVIF from "@assets/gallery/18/FINAL-50.avif"
import Img18WEBP from "@assets/gallery/18/FINAL-50.webp"
import Img19JPEG from "@assets/gallery/19/FINAL-50.jpg"
import Img19AVIF from "@assets/gallery/19/FINAL-50.avif"
import Img19WEBP from "@assets/gallery/19/FINAL-50.webp"
import Img20JPEG from "@assets/gallery/20/FINAL-50.jpg"
import Img20AVIF from "@assets/gallery/20/FINAL-50.avif"
import Img20WEBP from "@assets/gallery/20/FINAL-50.webp"
import Img21JPEG from "@assets/gallery/21/FINAL-50.jpg"
import Img21AVIF from "@assets/gallery/21/FINAL-50.avif"
import Img21WEBP from "@assets/gallery/21/FINAL-50.webp"
import ChessJPEG from "@assets/gallery/winners/1-chess/FINAL-50.jpg"
import ChessAVIF from "@assets/gallery/winners/1-chess/FINAL-50.avif"
import ChessWEBP from "@assets/gallery/winners/1-chess/FINAL-50.webp"
import IntelJPEG from "@assets/gallery/winners/2-intel/FINAL-50.jpg"
import IntelAVIF from "@assets/gallery/winners/2-intel/FINAL-50.avif"
import IntelWEBP from "@assets/gallery/winners/2-intel/FINAL-50.webp"
import FrasersJPEG from "@assets/gallery/winners/3-frasers/FINAL-50.jpg"
import FrasersAVIF from "@assets/gallery/winners/3-frasers/FINAL-50.avif"
import FrasersWEBP from "@assets/gallery/winners/3-frasers/FINAL-50.webp"
import CapitalOne1JPEG from "@assets/gallery/winners/4-capital-one/1/FINAL-50.jpg"
import CapitalOne1AVIF from "@assets/gallery/winners/4-capital-one/1/FINAL-50.avif"
import CapitalOne1WEBP from "@assets/gallery/winners/4-capital-one/1/FINAL-50.webp"
import CapitalOne2JPEG from "@assets/gallery/winners/4-capital-one/2/FINAL-50.jpg"
import CapitalOne2AVIF from "@assets/gallery/winners/4-capital-one/2/FINAL-50.avif"
import CapitalOne2WEBP from "@assets/gallery/winners/4-capital-one/2/FINAL-50.webp"
import HackiestJPEG from "@assets/gallery/winners/5-hackiest-hack/FINAL-50.jpg"
import HackiestAVIF from "@assets/gallery/winners/5-hackiest-hack/FINAL-50.avif"
import HackiestWEBP from "@assets/gallery/winners/5-hackiest-hack/FINAL-50.webp"
import Winners1JPEG from "@assets/gallery/winners/6-winners/1/FINAL-50.jpg"
import Winners1AVIF from "@assets/gallery/winners/6-winners/1/FINAL-50.avif"
import Winners1WEBP from "@assets/gallery/winners/6-winners/1/FINAL-50.webp"
import Winners2JPEG from "@assets/gallery/winners/6-winners/2/FINAL-50.jpg"
import Winners2AVIF from "@assets/gallery/winners/6-winners/2/FINAL-50.avif"
import Winners2WEBP from "@assets/gallery/winners/6-winners/2/FINAL-50.webp"
import RetroJPEG from "@assets/gallery/winners/7-retro/FINAL-50.jpg"
import RetroAVIF from "@assets/gallery/winners/7-retro/FINAL-50.avif"
import RetroWEBP from "@assets/gallery/winners/7-retro/FINAL-50.webp"
import FirstHacker1JPEG from "@assets/gallery/winners/8-first-time-hacker/1/FINAL-50.jpg"
import FirstHacker1AVIF from "@assets/gallery/winners/8-first-time-hacker/1/FINAL-50.avif"
import FirstHacker1WEBP from "@assets/gallery/winners/8-first-time-hacker/1/FINAL-50.webp"
import FirstHacker2JPEG from "@assets/gallery/winners/8-first-time-hacker/2/FINAL-50.jpg"
import FirstHacker2AVIF from "@assets/gallery/winners/8-first-time-hacker/2/FINAL-50.avif"
import FirstHacker2WEBP from "@assets/gallery/winners/8-first-time-hacker/2/FINAL-50.webp"

import { Col, Container, Row } from "react-bootstrap";

function Gallery(): JSX.Element {
    return <HackNottsDecoratedPage>
        <Container>
            <HackNottsSectionHeader
                title="Gallery"
                id="Gallery"
            />

            <ul>
                <li>All event images can be downloaded <a href="https://hacksocnotts.sharepoint.com/:f:/s/HackNottsPhotos/EmBuPf8Xic5BkXjunnlWJoEBIyv_EcOrLLF9ZjmvOTmVxw?e=3g0Yrb">here</a>.</li>
                <li>All event images are licensed under <a href="http://creativecommons.org/publicdomain/zero/1.0">CC0 1.0
                    {/* These CSS values are largely taken from the CC HTML generator, and messed about with until they made sense */}
                    <CC style={{ width: "1rem", height: "1.2rem", marginLeft: "3px", verticalAlign: "text-bottom" }} />
                    <Zero style={{ display: "inline", width: "1rem", height: "1.2rem", marginLeft: "3px", verticalAlign: "text-bottom" }} />
                </a>.</li>
                <li>If you want any images removed for any reason, please contact us at <a href="mailto:committee@hacksocnotts.co.uk">committee@hacksocnotts.co.uk</a>.</li>
            </ul>

            <Col>
                <Row>
                    <Col>
                        <picture>
                            <source srcSet={Img1AVIF} type="image/avif" />
                            <source srcSet={Img1WEBP} type="image/webp" />
                            <img src={Img1JPEG} style={{ width: "100%" }} alt="3 people at the Intel booth, with Arc A770 GPUs" />
                        </picture>
                        <picture>
                            <source srcSet={Img3AVIF} type="image/avif" />
                            <source srcSet={Img3WEBP} type="image/webp" />
                            <img src={Img3JPEG} style={{ width: "100%" }} alt="People talking at the Capital One booth" />
                        </picture>
                        <picture>
                            <source srcSet={Img5AVIF} type="image/avif" />
                            <source srcSet={Img5WEBP} type="image/webp" />
                            <img src={Img5JPEG} style={{ width: "100%" }} alt="Hackathons UK talking at the opening ceremony" />
                        </picture>
                        <picture>
                            <source srcSet={Img7AVIF} type="image/avif" />
                            <source srcSet={Img7WEBP} type="image/webp" />
                            <img src={Img7JPEG} style={{ width: "100%" }} alt="Frasers Group delivering a workshop" />
                        </picture>
                        <picture>
                            <source srcSet={Img9AVIF} type="image/avif" />
                            <source srcSet={Img9WEBP} type="image/webp" />
                            <img src={Img9JPEG} style={{ width: "100%" }} alt="People watching the Intel workshop" />
                        </picture>
                        <picture>
                            <source srcSet={Img11AVIF} type="image/avif" />
                            <source srcSet={Img11WEBP} type="image/webp" />
                            <img src={Img11JPEG} style={{ width: "100%" }} alt="A laptop running basic raycaster, with a lot of clutter on the table" />
                        </picture>
                        <picture>
                            <source srcSet={Img13AVIF} type="image/avif" />
                            <source srcSet={Img13WEBP} type="image/webp" />
                            <img src={Img13JPEG} style={{ width: "100%" }} alt="People working on their project, with cans and a rubber duck stacked on the table" />
                        </picture>
                        <picture>
                            <source srcSet={Img15AVIF} type="image/avif" />
                            <source srcSet={Img15WEBP} type="image/webp" />
                            <img src={Img15JPEG} style={{ width: "100%" }} alt="Two organisers running Warewolf" />
                        </picture>
                        <picture>
                            <source srcSet={Img17AVIF} type="image/avif" />
                            <source srcSet={Img17WEBP} type="image/webp" />
                            <img src={Img17JPEG} style={{ width: "100%" }} alt="A laptop running Minecraft, with a person sitting to the side of the laptop" />
                        </picture>
                        <picture>
                            <source srcSet={Img19AVIF} type="image/avif" />
                            <source srcSet={Img19WEBP} type="image/webp" />
                            <img src={Img19JPEG} style={{ width: "100%" }} alt="People focusing on their laptops" />
                        </picture>
                        <picture>
                            <source srcSet={Img21AVIF} type="image/avif" />
                            <source srcSet={Img21WEBP} type="image/webp" />
                            <img src={Img21JPEG} style={{ width: "100%" }} alt="The HackNotts organisers and volunteers. The lead organiser is in a maid dress" />
                        </picture>
                        <picture>
                            <source srcSet={ChessAVIF} type="image/avif" />
                            <source srcSet={ChessWEBP} type="image/webp" />
                            <img src={ChessJPEG} style={{ width: "100%" }} alt="A HackNotts organiser with the chess prize winner" />
                        </picture>
                        <picture>
                            <source srcSet={FrasersAVIF} type="image/avif" />
                            <source srcSet={FrasersWEBP} type="image/webp" />
                            <img src={FrasersJPEG} style={{ width: "100%" }} alt="The winners of Frasers' prize shaking hands with Frasers Group" />
                        </picture>
                        <picture>
                            <source srcSet={CapitalOne2AVIF} type="image/avif" />
                            <source srcSet={CapitalOne2WEBP} type="image/webp" />
                            <img src={CapitalOne2JPEG} style={{ width: "100%" }} alt="The winners of Capital One's prize taking Capital One bags" />
                        </picture>
                        <picture>
                            <source srcSet={Winners1AVIF} type="image/avif" />
                            <source srcSet={Winners1WEBP} type="image/webp" />
                            <img src={Winners1JPEG} style={{ width: "100%" }} alt="The winners picking up Raspberry Pi 5s" />
                        </picture>
                        <picture>
                            <source srcSet={RetroAVIF} type="image/avif" />
                            <source srcSet={RetroWEBP} type="image/webp" />
                            <img src={RetroJPEG} style={{ width: "100%" }} alt="The retro prize winners posing with their prizes - retro computer kits and a Blahaj" />
                        </picture>
                    </Col>
                    <Col>
                        <picture>
                            <source srcSet={Img2AVIF} type="image/avif" />
                            <source srcSet={Img2WEBP} type="image/webp" />
                            <img src={Img2JPEG} style={{ width: "100%" }} alt="A shot of the main hacking area" />
                        </picture>
                        <picture>
                            <source srcSet={Img4AVIF} type="image/avif" />
                            <source srcSet={Img4WEBP} type="image/webp" />
                            <img src={Img4JPEG} style={{ width: "100%" }} alt="Two HackNotts organisers looking at a computer" />
                        </picture>
                        <picture>
                            <source srcSet={Img6AVIF} type="image/avif" />
                            <source srcSet={Img6WEBP} type="image/webp" />
                            <img src={Img6JPEG} style={{ width: "100%" }} alt="Capital One delivering a workshop" />
                        </picture>
                        <picture>
                            <source srcSet={Img8AVIF} type="image/avif" />
                            <source srcSet={Img8WEBP} type="image/webp" />
                            <img src={Img8JPEG} style={{ width: "100%" }} alt="Frasers Group delivering a workshop" />
                        </picture>
                        <picture>
                            <source srcSet={Img10AVIF} type="image/avif" />
                            <source srcSet={Img10WEBP} type="image/webp" />
                            <img src={Img10JPEG} style={{ width: "100%" }} alt="A HackNotts organiser with a large stack of pizza boxes" />
                        </picture>
                        <picture>
                            <source srcSet={Img12AVIF} type="image/avif" />
                            <source srcSet={Img12WEBP} type="image/webp" />
                            <img src={Img12JPEG} style={{ width: "100%" }} alt="Two people stacking cups in a pyramid, with multiple people behind watching" />
                        </picture>
                        <picture>
                            <source srcSet={Img14AVIF} type="image/avif" />
                            <source srcSet={Img14WEBP} type="image/webp" />
                            <img src={Img14JPEG} style={{ width: "100%" }} alt="HackNotts organisers sitting together planning judging" />
                        </picture>
                        <picture>
                            <source srcSet={Img16AVIF} type="image/avif" />
                            <source srcSet={Img16WEBP} type="image/webp" />
                            <img src={Img16JPEG} style={{ width: "100%" }} alt="A zoom shot of a table football table jankily held together by tape" />
                        </picture>
                        <picture>
                            <source srcSet={Img18AVIF} type="image/avif" />
                            <source srcSet={Img18WEBP} type="image/webp" />
                            <img src={Img18JPEG} style={{ width: "100%" }} alt="Frasers Group working on their project" />
                        </picture>
                        <picture>
                            <source srcSet={Img20AVIF} type="image/avif" />
                            <source srcSet={Img20WEBP} type="image/webp" />
                            <img src={Img20JPEG} style={{ width: "100%" }} alt="A hacker testing their project" />
                        </picture>
                        <picture>
                            <source srcSet={IntelAVIF} type="image/avif" />
                            <source srcSet={IntelWEBP} type="image/webp" />
                            <img src={IntelJPEG} style={{ width: "100%" }} alt="The winners of Intel's prize taking their Arc A770s" />
                        </picture>
                        <picture>
                            <source srcSet={CapitalOne1AVIF} type="image/avif" />
                            <source srcSet={CapitalOne1WEBP} type="image/webp" />
                            <img src={CapitalOne1JPEG} style={{ width: "100%" }} alt="The Capital One prize winners posing with their prizes" />
                        </picture>
                        <picture>
                            <source srcSet={HackiestAVIF} type="image/avif" />
                            <source srcSet={HackiestWEBP} type="image/webp" />
                            <img src={HackiestJPEG} style={{ width: "100%" }} alt="The Hackiest Hack prize winners collecting Blahaj" />
                        </picture>
                        <picture>
                            <source srcSet={Winners2AVIF} type="image/avif" />
                            <source srcSet={Winners2WEBP} type="image/webp" />
                            <img src={Winners2JPEG} style={{ width: "100%" }} alt="The winners and the lead organiser posing with two Blahaj" />
                        </picture>
                        <picture>
                            <source srcSet={FirstHacker1AVIF} type="image/avif" />
                            <source srcSet={FirstHacker1WEBP} type="image/webp" />
                            <img src={FirstHacker1JPEG} style={{ width: "100%" }} alt="The First Time Hacker winner taking a Blahaj" />
                        </picture>
                        <picture>
                            <source srcSet={FirstHacker2AVIF} type="image/avif" />
                            <source srcSet={FirstHacker2WEBP} type="image/webp" />
                            <img src={FirstHacker2JPEG} style={{ width: "100%" }} alt="The First Time Hacker winner and the lead organiser posing with their prize" />
                        </picture>
                    </Col>
                </Row>
            </Col>

        </Container>
    </HackNottsDecoratedPage>
}

export default Gallery;
