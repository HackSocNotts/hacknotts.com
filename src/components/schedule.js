import React from 'react';
import { Container, Table } from 'react-bootstrap';

export default function Schedule(props) {
  return (
    <Container
      style={{
        paddingTop: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table striped bordered variant="dark" size="sm" style={{ width: "70%" }}>
        <thead>
          <tr class="intro-text">
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody class="main-text" style={{ textAlign: "center" }}>
          <tr class="intro-text">
            <th></th>
            <th style={{padding: "1em"}}><i>Sunday</i></th>
          </tr>
          <ScheduleRow
            time="10:00"
            activity="Opening Ceremony/Hacking Starts"
          />
          <ScheduleRow time="10:30" activity="Opening Ceremony Q&A" />
          <ScheduleRow time="11:00" activity="Team Forming" />
          <ScheduleRow time="11:30" activity="Capital One API Demo" />
          <ScheduleRow time="11:00" activity="Twilio Workshop" />
          <ScheduleRow time="13:45" activity="Github Workshop" />
          <ScheduleRow time="14:00" activity="Capital One Workshop" />
          <ScheduleRow time="15:15" activity="Workshop" />
          <ScheduleRow time="16:30" activity="Parsec Talk" />
          <ScheduleRow time="17:30" activity="Clash of Code Mini Event" />
          <ScheduleRow time="18:30" activity="Pub Quiz Mini Event" />
          <ScheduleRow
            time="Evening"
            activity="Game Night on Discord & Stream"
          />
          <tr class="intro-text">
            <th></th>
            <th style={{padding: "1em"}}><i>Sunday</i></th>
          </tr>
          <ScheduleRow time="00:00" activity="Live RPG on Stream" />
          <ScheduleRow time="01:00" activity="Workshops" />
          <ScheduleRow time="04:00" activity="Phasmaphobia on Stream" />
          <ScheduleRow time="07:00" activity="Mock Interview Game Show" />
          <ScheduleRow time="08:00" activity="Cook-Off on Stream" />
          <ScheduleRow time="09:00" activity="Submission Help Desk" />
          <ScheduleRow time="09:30" activity="Submissions Due" />
          <ScheduleRow time="11:00" activity="Hacking Ends" />
          <ScheduleRow time="11:30" activity="Demos on Stream" />
          <ScheduleRow time="13:30" activity="Closing Ceremony" />
        </tbody>
      </Table>
    </Container>
  )
}

function ScheduleRow(props) {
  return <tr>
    <th>{props.time}</th>
    <th>{props.activity}</th>
  </tr>;
}
