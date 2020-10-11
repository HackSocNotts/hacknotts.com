import React,  { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export default function SectionTitle(props) {
  return <h1 className="title-text">
    {props.text}
  </h1>;
 }
 