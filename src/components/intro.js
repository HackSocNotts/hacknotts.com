import React,  { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import bruceStanding from "../../static/bruce/brucestanding.png";

export default function Intro(props) {
 return <Container>
    <div className="main-text">
    Every year HackNotts gathers hundreds of hackers to engage with new technologies, engage with each other, and engage with the tech industry. Learn new skills, meet new people, and enjoy workshops and prizes from some great tech companies from Nottingham and beyond.
    <br/>
    <div style={{display: "flex", placeContent: "center"}}><img src={bruceStanding} className="bear"/></div>
    <br/>
    Leaving our usual venue of the Ada Lovelace Computing Lab at UoN HackNotts 2020 is coming to internet connected host near you! 
    <br/><br/>
Join us online this year for everything HackNotts is known for sans the food: great people, fascinating workshop content, unique swag, games corners, a <a href="https://twitter.com/BruceBernardII">giant bear</a>, and more.
    </div>
</Container>;
}
