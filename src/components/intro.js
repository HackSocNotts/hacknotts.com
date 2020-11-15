import React from 'react';
import { Container } from 'react-bootstrap';

import bruceHug from "../../static/bruce/bruce_hugwink.png";
import bruceNeutral from "../../static/bruce/bruce_neutral.png";
import bruceWave from "../../static/bruce/bruce_blushwave.png";

export default function Intro(props) {
 return <Container>
    <div className="main-text">
    Every year HackNotts gathers hundreds of hackers to engage with new technologies, engage with each other, and engage with the tech industry. Learn new skills, meet new people, and enjoy workshops and prizes from some great tech companies from Nottingham and beyond.
    <br/>
    <br/>
    Leaving our usual venue of the Ada Lovelace Computing Lab at UoN HackNotts 2020 is coming to internet connected host near you! 
    <div className="bear-wrapper" >
        <img src={bruceHug} className="bear hideimage-2"/>
        <img src={bruceNeutral} className="bear"/>
        <img src={bruceWave} className="bear hideimage-1"/>
    </div>
Join us online this year for everything HackNotts is known for sans the food: great people, fascinating workshop content, unique swag, games corners, a <a href="https://twitter.com/BruceBernardII">giant bear</a>, and more.
    </div>
</Container>;
}
