import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  
  render() {
    const details = this.props.details

    return (
        <div className="Card">
            <Tile src="/images/launching/deployment/heroku.png"></Tile>
            <CardDeatils details={details}></CardDeatils>
            <Ribbon className="price-tags"></Ribbon>
        </div>
    );
  }
}


function Tile(props) {
    return (
        <div className="Tile">
          <a href="#">
            <img src={props.src} alt="screenshot" />
          </a>  
        </div>
    )
}

function CardDeatils(props) {
  // console.log(props["details"].title)

  return (
    <div className="CardDetails">
      <Ribbon className="tech-stack-tags"></Ribbon>
      <a href="#" className="title">
        {props["details"].title}
      </a>
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
