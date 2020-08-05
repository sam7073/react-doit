import React from "react";

export default function Input(props, context) {
  const { label } = props;
  return (
    <div>
      {label}
      <input name={name} onChange={props.onChange}></input>
    </div>
  );
}
