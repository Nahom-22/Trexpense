import React from "react";
import moment from "moment";

import "./date.css";

function Date(props) {
  const date = props.date;
  const dateFormatted = moment(date).format("MMM Do YYYY");
  return (
    <div className="date-container">
      <div className="date-content">
        <p>{dateFormatted}</p>
      </div>
    </div>
  );
}

export default Date;
