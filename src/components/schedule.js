import React,  { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

export default function Schedule(props) {
  return <Container style={{paddingTop: "10px", display:"flex", justifyContent: "center", alignItems: "center"}}>
    {/*
    <Table striped bordered variant="dark" size="sm" style={{width: "70%"}}>
      <thead>
        <tr class="intro-text">
          <th>Time</th>
          <th>Activity</th>
        </tr>
      </thead>
      <tbody class="main-text">
        <ScheduleRow time="10:00" activity="Registration"/>
        <ScheduleRow time="10:00" activity="Breakfast"/>
        <ScheduleRow time="11:00" activity="Opening Ceramony"/>
        <ScheduleRow time="12:00" activity="Hacking Starts"/>
        <ScheduleRow time="12:00" activity="Team Building Session"/>
        <ScheduleRow time="13:00" activity="Lunch"/>
        <ScheduleRow time="13:45" activity="GitHub Workshop"/>
        <ScheduleRow time="19:00" activity="Dinner"/>
        <ScheduleRow time="23:00" activity="Werewolf"/>
        <ScheduleRow time="09:00" activity="Midnight Pizza"/>
      </tbody>
    </Table>    
    */}
    <div className="intro-text">Announced Soon</div>
  </Container>;
}

function ScheduleRow(props) {
  return <tr>
    <th>{props.time}</th>
    <th>{props.activity}</th>
  </tr>;
}