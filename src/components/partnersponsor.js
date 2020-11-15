import React from 'react';
import { Col } from 'react-bootstrap';

export default function PartnerSponsor(props) {
  return <Col className="xs-6 md-4" style={{textAlign: "center", alignSelf: "center"}}>
    <a href={props.link}><img style={{width: "18em", maxWidth: "25vw"}} src={props.photo}/></a>
  </Col>;
}