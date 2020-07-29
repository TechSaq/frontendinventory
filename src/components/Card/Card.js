import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  render() {
    return (
        <div className="Card">
            <Tile src="/images/launching/deployment/heroku.png"></Tile>
            <CardDeatils></CardDeatils>
            <Ribbon className="price-tags"></Ribbon>
        </div>
    );
  }
}


function Tile(props) {
    return (
        <div className="Tile">
          <img src={props.src} alt="screenshot"/>  
        </div>
    )
}

function CardDeatils(props) {
  return (
    <div className="CardDetails">
      <Ribbon className="tech-stack-tags"></Ribbon>
      <div className="title">freeCodeCamp</div>
      <div className="description">
        lorom ipsum donor sit amet. lorom ipsum donor sit amet.
        lorom ipsum donor sit amet. lorom ipsum donor sit amet.
      </div>
      <div className="button">
        <a href="#">Visit Website</a>
      </div>
    </div>
  )
}

function Ribbon(props) {
  return (
    <ul className={`Ribbon ${props.className}`}>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ul>
  )
}

export default Card;
