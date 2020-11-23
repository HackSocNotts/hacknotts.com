import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import alexi from "../../static/photos/alexi.jpg"
import aaron from "../../static/photos/aaron.jpg"
import abinaya from "../../static/photos/abinaya.png"
import gabe from "../../static/photos/gabe.png"
import reece from "../../static/photos/reece.jpg"
import ryan from "../../static/photos/ryan.jpg"
import alisha from "../../static/photos/alisha.png"
import daniel from "../../static/photos/daniel.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Team() {
  return (
    <Container>
      <Row>
        <TeamMember
          name="Reece Harvey"
          photo={reece}
          role="Head of Logistics"
          email="reece.harvey@hacksocnotts.co.uk"
        />
        <TeamMember
          name="Ryan Hardwick"
          photo={ryan}
          role="Head of Finance"
          email="reece.hardwick@hacksocnotts.co.uk"
        />
        <TeamMember
          name="Abinaya Maruthalingam"
          photo={abinaya}
          role="Head of Human Resources"
          email="abinaya.maruthalingam@hacksocnotts.co.uk"
        />
        <TeamMember
          name="Gabe Leach"
          photo={gabe}
          role="Head of Experience"
          email="gabriel.leach@hacksocnotts.co.uk"
        />
        <TeamMember
          name="Alisha Dadar"
          photo={alisha}
          role="Sponsor Liaison"
          email="alisha.dadar@hacksocnotts.co.uk"
        />
        <TeamMember
          name="Alexi Dewfall"
          photo={alexi}
          role="HackNotts Coordinator"
          email="alexander@hacksocnotts.co.uk"
          twitter="https://twitter.com/AksanDotDev"
          linkedin="https://linkedin.com/in/aksandotdev"
        />
        <TeamMember
          name="Aaron Osher"
          photo={aaron}
          role="HackSoc President"
          email="aaron@hacksocnotts.co.uk"
          twitter="https://twitter.com/aaronosher"
          linkedin="https://linkedin.com/in/aaronosher"
        />
        <TeamMember
          name="Daniel Cordell"
          photo={daniel}
          role="Chief Friend Officer"
          email="daniel@hacksocnotts.co.uk"
          twitter="https://twitter.com/CrdlPls"
          linkedin="https://www.linkedin.com/in/daniel-cordell/"
        />
      </Row>
    </Container>
  )
}

function TeamMember(props) {
  return (
    <Col style={{ paddingTop: "12px", margin: "4px", textAlign: "center" }}>
      <img
        style={{ height: "12em", maxHeight: "40vh", borderRadius: "5px" }}
        src={props.photo}
        alt={props.name || "Team Member"}
      />
      <div style={{ textAlign: "center" }}>
        <b>{props.name}</b>
      </div>
      <div>{props.role}</div>
      <a
        href={`mailto:${props.email}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Email ${props.name || "Team Member"}`}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ marginRight: "5px" }}
          color="#00953b"
        />
      </a>
      {props.twitter ? (
        <a
          href={props.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${props.name || "Team Member"}'s Twitter`}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ marginRight: "5px" }}
            color="#1DA1F2"
          />
        </a>
      ) : (
        ""
      )}
      {props.linkedin ? (
        <a
          href={props.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${props.name || "Team Member"}'s LinkedIn`}
        >
          <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
        </a>
      ) : (
        ""
      )}
    </Col>
  )
}
