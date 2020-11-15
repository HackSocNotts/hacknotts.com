import React from 'react';
import { Container, Row, } from 'react-bootstrap';

import PartnerSponsor from '../components/partnersponsor';

import CapitalOne from '../../static/external/capitalone.svg';
import GitHub from '../../static/external/github.png';
import Twilio from '../../static/external/twilio.svg';

export default function Sponsors() {
  return <Container>
    <Row style={{marginTop: "16px", marginBottom: "32px", justifyContent: "center"}}>
      <PartnerSponsor photo={CapitalOne} link="https://www.capitalone.co.uk/"/>
      <PartnerSponsor photo={GitHub} link="https://github.com/"/>
      <PartnerSponsor photo={Twilio} link="https://www.twilio.com/"/>
    </Row>
  </Container>;
}