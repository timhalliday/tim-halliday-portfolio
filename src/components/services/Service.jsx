import React from "react";
import ReactCardFlip from "react-card-flip";

export default function Service(props){
  const [flip, setFlip] = React.useState(false);

  const achievements = props.achievements.map(achievement => <li key={props.achievements.indexOf(achievement)}>{achievement}</li>)

  return (
    <ReactCardFlip
      isFlipped= {flip}
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
      flipDirection="horizontal"
    >
      <div className="services__content">
        <div>
          <i className={`uil uil-${props.icon} services__icon`}></i>
          <h3 className="services__title">{props.title}</h3>
        </div>

        <span className="services__button" onClick={() => setFlip(!flip)}>
          View More
          <i className="uil uil-arrow-right services__button-icon"></i>
        </span>


      </div>
      <div className="services__content-flip">
        <i className="uil uil-corner-up-left-alt services__button-close" onClick={() => setFlip(!flip)}></i>
        <div>
          <h3 className="services__title-flip">{props.title}</h3>
        </div>
        <span className="services__subtitle-flip">{props.subtitle}<br/><br/>
        <strong>Some achievements I'm proud of:</strong>
        </span>
        <ul className="services__achievements">
          {achievements}
        </ul>



      </div>
    </ReactCardFlip>
  )
}
