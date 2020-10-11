import React,  { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export default function Intro(props) {
 return <Container>
    <div className="main-text">
      HackNotts is a 24 hour Hackathon in Nottingham. Students will team up to learn about tech and create cool stuff.
    </div>
</Container>;
}
