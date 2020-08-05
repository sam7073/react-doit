import React from "react";

export default function Counter(props) {
  return (
    <div>
      {props.num}
      <button onClick={props.onClick}>add</button>
    </div>
  );
}
