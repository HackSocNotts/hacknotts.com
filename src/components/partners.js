import React from 'react';
import { Container, Row, } from 'react-bootstrap';

import PartnerSponsor from '../components/partnersponsor';

import HackathonsUK from '../../static/external/hackathonsuk.svg';
import HackProductions from '../../static/external/hackproductions.svg';

export default function Partners() {
  return <Container>
    <Row style={{marginTop: "32px", marginBottom: "32px", justifyContent: "center"}}>
      <PartnerSponsor photo={HackathonsUK} link="https://hack.athon.uk/"/>
      <PartnerSponsor photo={HackProductions} link="https://hack.productions/"/>
    </Row>
  </Container>;
}
