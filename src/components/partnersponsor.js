import React from 'react';
import { Col } from 'react-bootstrap';

export default function PartnerSponsor({photo, link, alt, ...props}) {
  return <Col className="xs-6 md-4" style={{textAlign: "center", alignSelf: "center"}}>
    <a href={link} target="_blank" rel="noopener noreferrer"><img style={{width: "18em", maxWidth: "25vw"}} src={photo} alt={alt || "partner logo"} {...props} /></a>
  </Col>;
}