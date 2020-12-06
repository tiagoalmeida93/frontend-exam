import React from "react";

import "./styles.scss";

export default function Button({ handleClick, type, value }) {
  return (
    <button onClick={() => handleClick} type={type}>
      {value}
    </button>
  );
}
