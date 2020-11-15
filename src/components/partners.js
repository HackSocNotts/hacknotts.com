import React from 'react';
import { Container, Row, } from 'react-bootstrap';

import PartnerSponsor from '../components/partnersponsor';

import HackathonsUK from '../../static/external/hackathonsuk.svg';
import HackProductions from '../../static/external/hackproductions.svg';
import TwistedNarrative from '../../static/external/twistednarrative.png';
import Parsec from '../../static/external/parsec.svg';
import GameSoc from '../../static/external/gamesoc.png';

export default function Partners() {
  return <Container>
    <Row style={{marginTop: "32px", marginBottom: "32px", justifyContent: "center"}}>
      <PartnerSponsor photo={HackathonsUK} link="https://hack.athon.uk/"/>
      <PartnerSponsor photo={HackProductions} link="https://hack.productions/"/>
      <PartnerSponsor photo={Parsec} link="https://parsecgaming.com/"/>
      <PartnerSponsor photo={TwistedNarrative} link="https://www.facebook.com/Twisted-Narrative-217339835485251/"/>
      <PartnerSponsor photo={GameSoc} link="https://su.nottingham.ac.uk/activities/view/game-soc"/>
    </Row>
  </Container>;
}
