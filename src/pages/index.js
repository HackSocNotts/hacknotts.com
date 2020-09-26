import React from 'react';
import Header from '../components/header/header';

import logoRed from '../../static/logo/logoRed.png';
import logoYellow from '../../static/logo/logoYellow.png';
import logoBlue from '../../static/logo/logoBlue.png';

//Todo colours file
import global from '../../src/styles/global.scss';

const colours = [{logo: logoRed, colour: global.hnRed}, {logo: logoYellow, colour: global.hnYellow}, {logo: logoBlue, colour: global.hnBlue}];

export default function Home() {
  const colourPicker = Math.floor(Math.random() * 3);
  for (var i = colourPicker; i < 3; ++i) {
    var c = colours.shift();
    colours.push(c);
  }

  return <>
    <link href="https://fonts.googleapis.com/css?family=Montseratt:400,700|Lato:400,700" rel="stylesheet"/>
    <Header colours={colours}/>
  </>
}
