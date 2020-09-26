import React from 'react';
import Logo from './logo';
import Background from '../../../static/background/background.png';
import Helmet from 'react-helmet';
import global from '../../../src/styles/global.scss';

export default function Header(props) {
  return <header style={{textAlign: "center", width: '100vw', height: '100vh', background: `url(${Background})`, backgroundSize: 'cover'}}>
    <div style={{display: 'table-cell', verticalAlign: 'middle', width: 'inherit', height: 'inherit'}}>
      <div className='container'>
        <Logo image={props.colours[0].logo}/>
        <div className="intro-text">
          A 24 hour <a style={{color: props.colours[1].colour}} href="https://en.wikipedia.org/wiki/Hackathon" rel="noopener noreferrer">Hackathon</a> from the University of Nottingham, brought to you by <a style={{color: props.colours[1].colour}} href="http://www.hacksocnotts.co.uk" rel="noopener noreferrer">HackSoc</a>.
        </div>
        <div className="intro-text intro-date" style={{color: props.colours[2].colour}}>
          November 28<sup>th</sup> and 29<sup>th</sup> 2020
        </div>
        <div style={{fontSize: "20px", paddingTop: "15px"}}>
        <tito-button style={{background: global.hnRed}}event="hacknotts/2020">Register</tito-button>
        </div>
      </div>
    </div>
    <Helmet>
      <script src="https://js.tito.io/v1" async=""></script>
    </Helmet>
  </header>;
}