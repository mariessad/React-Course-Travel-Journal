import React from "react";

export default function Travel(props) {
  return (
    <div className="travel--container">
      <img src={`./images/${props.loc.image}`} alt="" className="travel--img" />
      <section className="travel--section">
        <section className="travel--country">
          <img src="../location.png" className="travel--png" />
          {props.loc.country}
          <a href={props.loc.link} className="grey">
            View on Google maps..
          </a>
        </section>

        <section className="travel--location">{props.loc.location}</section>
        <section className="travel--date">{props.loc.date}</section>
        <section className="travel--description">
          {props.loc.description}
        </section>
      </section>
    </div>
  );
}
