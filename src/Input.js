import React from "react";

export default function Input(props, context) {
  const { label } = props;
  return (
    <div>
      {label}
      <input name={props.name} onChange={props.onChange}></input>
    </div>
  );
}
