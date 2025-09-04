import React from "react";
import "./styles.css";

const GroupCard = (props) => {
  const { name, description } = props.group;
  return (
    <article className="card-container" onClick={props.onClick}>
      <h1>{name}</h1>
      <p>{description ? description : 'Description is not'}</p>
    </article>
  );
};

export default GroupCard;
