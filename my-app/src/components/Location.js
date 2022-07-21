import React from "react";

export default function Travel(props) {
  return (
    <div className="travel--container">
      <img src={`./images/${props.loc.image}`} alt="" className="travel--img" />
      <section className="travel--section">
        <p className="travel--country">{props.loc.country}</p>
        <a href={props.loc.link} className="grey">
          View on Google maps..
        </a>
        <p className="travel--location">{props.loc.location}</p>
        <p>{props.loc.date}</p>
        <p>{props.loc.description}</p>
      </section>
    </div>
  );
}
