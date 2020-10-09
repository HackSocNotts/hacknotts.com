import React from 'react';
import Logo from './logo';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';

export default function Header(props) {
  const colours = props.colours.random;
  const variables = props.colours.named;

  return <header className='intro' style={{textAlign: "center", width: '100vw', height: '100vh'}}>
    <div style={{display: 'table-cell', verticalAlign: 'middle', width: 'inherit', height: 'inherit'}}>
      <Container>
        <Logo image={colours[0].logo}/>
        <div className="intro-text">
          A 24 hour <a style={{color: colours[1].colour}} href="https://en.wikipedia.org/wiki/Hackathon" rel="noopener noreferrer" className="intro-link">Hackathon</a> from the University of Nottingham, brought to you by <a style={{color: colours[1].colour}} className="intro-link" href="http://www.hacksocnotts.co.uk" rel="noopener noreferrer">HackSoc</a>.
        </div>
        <div className="intro-text intro-date" style={{color: colours[2].colour}}>
          November 28<sup>th</sup> and 29<sup>th</sup> 2020
        </div>
        <div style={{fontSize: "20px", paddingTop: "15px"}}>
        <tito-button style={{background: variables.hnRed}}event="hacknotts/2020">Register</tito-button>
        </div>
      </Container>
    </div>
    <Helmet>
      <script src="https://js.tito.io/v1"></script>
      <title>HackNotts</title>
    </Helmet>
  </header>;
}
