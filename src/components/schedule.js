import React from 'react';
import { Container, Table } from 'react-bootstrap';

export default function Schedule(props) {
  return <Container style={{paddingTop: "10px", display:"flex", justifyContent: "center", alignItems: "center"}}>
    <Table striped bordered variant="dark" size="sm" style={{width: "70%"}}>
      <thead>
        <tr class="intro-text">
          <th>Time</th>
          <th>Activity</th>
        </tr>
      </thead>
      <tbody class="main-text" style={textAlign: "center"}>
        <tr class="intro-text">
          <th colSpan="2">Saturday</th>
        </tr>
        <ScheduleRow time="11:00" activity="Opening Ceremony/Hacking Starts"/>
        <ScheduleRow time="11:30" activity="Opening Ceremony Q&A"/>
        <ScheduleRow time="12:00" activity="Team Forming"/>
        <ScheduleRow time="12:30" activity="Capital One API Demo"/>
        <ScheduleRow time="13:00" activity="Workshop"/>
        <ScheduleRow time="13:45" activity="Workshop"/>
        <ScheduleRow time="15:00" activity="Workshop"/>
        <ScheduleRow time="16:15" activity="Workshop"/>
        <ScheduleRow time="17:30" activity="Talk"/>
        <ScheduleRow time="19:00" activity="Clash of Code Mini Event"/>
        <ScheduleRow time="20:00" activity="Pub Quiz Mini Event"/>
        <ScheduleRow time="Evening" activity="Game Night on Discord & Stream"/>
        <tr class="intro-text">
          <th colSpan="2">Sunday</th>
        </tr>
        <ScheduleRow time="00:00" activity="Live RPG on Stream"/>
        <ScheduleRow time="04:00" activity="Phasmaphobia on Stream"/>
        <ScheduleRow time="08:00" activity="Cook-Off on Stream"/>
        <ScheduleRow time="09:00" activity="Submission Help Desk"/>
        <ScheduleRow time="09:30" activity="Submissions Due"/>
        <ScheduleRow time="11:00" activity="Hacking Ends"/>
        <ScheduleRow time="11:30" activity="Demos on Stream"/>
        <ScheduleRow time="13:30" activity="Closing Ceremony"/>
      </tbody>
    </Table>    
  </Container>;
}

function ScheduleRow(props) {
  return <tr>
    <th>{props.time}</th>
    <th>{props.activity}</th>
  </tr>;
}
