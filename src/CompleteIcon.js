import React from "react";
import './CompleteIcon.css'

function CompleteIcon({completed, onComplete}) {
  return (
    <>
      <label className="containerCheck">
        <input type="radio" className="radio"/>
        <span className={`checkmark ${completed&&"checkmark--active"}`}
          onClick={onComplete}
        ></span>
      </label>
    </>
  );
}

export {CompleteIcon};