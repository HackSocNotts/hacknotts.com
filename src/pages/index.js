import React,  { useLayoutEffect, useState } from 'react';
import Header from '../components/header/header';

import logoRed from '../../static/logo/logoRed.png';
import logoYellow from '../../static/logo/logoYellow.png';
import logoBlue from '../../static/logo/logoBlue.png';
import Intro from '../components/intro';
import SectionTitle from '../components/sectiontitle';
import NavBar from '../components/navbar';
import Schedule from '../components/schedule';
import Sponsors from '../components/sponsors';
import Partners from '../components/partners';
import Team from '../components/team';

const variables =  { 
  hnBlue: "#71c9e7",
  hnRed: "#e94d4d",
  hnYellow: "#f1e74b", 
  hnGrey: "#2d2a26"
}

const defaultColours = [
  { logo: logoRed, colour: variables.hnRed },
  { logo: logoYellow, colour: variables.hnYellow },
  { logo: logoBlue, colour: variables.hnBlue },
]

const randomColour = (newColours = defaultColours) => {
  const colourPicker = Math.floor(Math.random() * 3)
  for (var i = colourPicker; i < 3; ++i) {
    var c = newColours.shift()
    newColours.push(c)
  }
  return newColours
}

export default function Home() {
  const [colours, setColours] = useState(defaultColours)

  useLayoutEffect(() => {    
    setColours([...randomColour()])
  }, [])
  return <div style={{overflowX: "hidden"}}>
    <NavBar fixed="top"/>
    <Header colours={{random: colours, named: variables}}/>
    <SectionTitle text="Build Incredible Projects in 24 Hours" id="about"/>
    <Intro/>
    <SectionTitle text="Schedule" id="schedule"/>
    <Schedule/>
    <SectionTitle text="Sponsors" id="sponsors"/>
    <Sponsors/>
    <SectionTitle text="Partners" id="partners"/>
    <Partners/>
    <SectionTitle text="Meet the Team" id="team" />
    <Team/>
  </div>
}
