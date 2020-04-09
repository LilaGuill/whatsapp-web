import React from "react";

const Day = ({ date }) => {
  return (
    <div className="day--container">
      <div className="day--wrapper">
        <span className="day--span">{date}</span>
      </div>
    </div>
  );
};

export default Day;
