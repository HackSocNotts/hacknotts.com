import React,  { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import HackathonsUK from '../../static/external/hackathonsuk.svg';

export default function Partners() {
  return <Container>
    <Row style={{marginTop: "32px", marginBottom: "32px", justifyContent: "center"}}>
      <Partner photo={HackathonsUK} link="https://hack.athon.uk/"/>

    </Row>
  </Container>;
}

function Partner(props) {
  return <Col className="xs-6 md-4" style={{textAlign: "center"}}>
    <a href={props.link}><img style={{width: "15em", maxWidth: "25vw", borderRadius: "5px"}} src={props.photo}/></a>
  </Col>;
}