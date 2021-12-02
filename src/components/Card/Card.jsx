import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div class="card col-sm-3" id="card">
      <img
        class="card-img-top"
        src={props.image}
        alt={props.title}
        style={props.cardType === "team" ? { display: "none" } : {}}
      />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
