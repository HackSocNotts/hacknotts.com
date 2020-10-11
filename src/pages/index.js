import React,  { useEffect, useState } from 'react';
import Header from '../components/header/header';

import logoRed from '../../static/logo/logoRed.png';
import logoYellow from '../../static/logo/logoYellow.png';
import logoBlue from '../../static/logo/logoBlue.png';
import Intro from '../components/intro';
import SectionTitle from '../components/sectiontitle';
import NavBar from '../components/navbar';

const variables =  { 
  hnBlue: "#71c9e7",
  hnRed: "#e94d4d",
  hnYellow: "#f1e74b", 
  hnGrey: "#2d2a26"
}

export default function Home() {
  const [colours, setColours] = useState([{logo: logoRed, colour: variables.hnRed}, {logo: logoYellow, colour: variables.hnYellow}, {logo: logoBlue, colour: variables.hnBlue}]);

  const randomColour = (newColours) => {
    const colourPicker = Math.floor(Math.random() * 3);
    for (var i = colourPicker; i < 3; ++i) {
      var c = newColours.shift();
      newColours.push(c);
    }
    return newColours;
  }

  useEffect(() => {
    setColours([...randomColour(colours)]);
    console.log(colours);
  }, [])

  return <div style={{overflowX: "hidden"}}>
    <link href="https://fonts.googleapis.com/css?family=Montseratt:400,700|Lato:400,700" rel="stylesheet"/>
    <NavBar fixed="top"/>
    <Header colours={{random: colours, named: variables}}/>
    <SectionTitle text="Build Incredible Projects in 24 Hours"/>
    <Intro/>
  </div>
}
