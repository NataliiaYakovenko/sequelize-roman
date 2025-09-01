import React from "react";
import "./styles.css";

const UserCard = (props) => {
  const { firstName, lastName, email, birthday, gender } = props.user;

  return (
    <article className="card-wrapper">
      <h1>
        {firstName}
        {lastName}
      </h1>
      <p>{email}</p>
      <p>{gender}</p>
      <p>{birthday}</p>
    </article>
  );
};

export default UserCard;
