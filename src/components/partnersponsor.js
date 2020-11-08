import React from 'react';
import { Col } from 'react-bootstrap';

export default function PartnerSponsor(props) {
  return <Col className="xs-6 md-4" style={{textAlign: "center", alignSelf: "center"}}>
    <a href={props.link}><img style={{width: "15em", maxWidth: "25vw", borderRadius: "5px"}} src={props.photo}/></a>
  </Col>;
}