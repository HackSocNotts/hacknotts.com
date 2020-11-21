import React from 'react';
import { Container, Row, } from 'react-bootstrap';

import PartnerSponsor from '../components/partnersponsor';

import HackathonsUK from '../../static/external/hackathonsuk.svg';
import HackProductions from '../../static/external/hackproductions.svg';
import TwistedNarrative from '../../static/external/twistednarrative.png';
import Parsec from '../../static/external/parsec.svg';
import GameSoc from '../../static/external/gamesoc.png';

export default function Partners() {
  return (
    <Container>
      <Row
        style={{
          marginTop: "32px",
          marginBottom: "32px",
          justifyContent: "center",
        }}
      >
        <PartnerSponsor
          photo={HackathonsUK}
          link="https://hack.athon.uk/"
          atl="Hackathons UK Logo"
        />
        <PartnerSponsor
          photo={HackProductions}
          link="https://hack.productions/"
          alt="Hack Productions Logo"
        />
        <PartnerSponsor
          photo={Parsec}
          link="https://parsecgaming.com/"
          alt="Parsec Logo"
        />
        <PartnerSponsor
          photo={TwistedNarrative}
          link="https://www.facebook.com/Twisted-Narrative-217339835485251/"
          alt="Twisted Narrative Logo"
        />
        <PartnerSponsor
          photo={GameSoc}
          link="https://su.nottingham.ac.uk/activities/view/game-soc"
          alt="GameSoc Logo"
        />
      </Row>
    </Container>
  )
}
