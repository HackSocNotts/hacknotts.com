import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import blue1 from "../../static/hexagons/blue1.png"
import blue2 from "../../static/hexagons/blue2.png"
import blue3 from "../../static/hexagons/blue3.png"
import red1 from "../../static/hexagons/red1.png"
import red2 from "../../static/hexagons/red2.png"
import yellow1 from "../../static/hexagons/yellow1.png"
import yellow2 from "../../static/hexagons/yellow2.png"

import styled from "styled-components"

const Hexagon = styled.img`
  width: inherit;
  padding: 5px;
`

const blues = [blue1, blue2, blue3]
const reds = [red1, red2]
const yellows = [yellow1, yellow2]

var counter = 0

export default function SectionTitle(props) {
  const blue = blues[Math.floor(Math.random() * blues.length)]
  const red = reds[Math.floor(Math.random() * reds.length)]
  const yellow = yellows[Math.floor(Math.random() * yellows.length)]

  const colours = [red, blue, yellow]
  const colourPicker = counter++
  for (var i = colourPicker % 3; i < 3; ++i) {
    var c = colours.shift()
    colours.push(c)
  }

  return (
    <Container className="sectionTitle" id={props.id}>
      <Row style={{ alignItems: "center", textAlign: "center" }}>
        <Col className="hideimage-1">
          <Hexagon src={colours[0]} alt="" />
        </Col>
        <Col className="hideimage-2">
          <Hexagon src={colours[1]} alt="" />
        </Col>
        <Col>
          <Hexagon src={colours[2]} alt="" />
        </Col>
        <Col xs={4}>
          <h1
            className="title-text"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {props.text}
          </h1>
        </Col>
        <Col>
          <Hexagon src={colours[2]} alt="" />
        </Col>
        <Col className="hideimage-2">
          <Hexagon src={colours[1]} alt="" />
        </Col>
        <Col className="hideimage-1">
          <Hexagon src={colours[0]} alt="" />
        </Col>
      </Row>
    </Container>
  )
}
