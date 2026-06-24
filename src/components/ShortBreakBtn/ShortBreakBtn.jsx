import React from "react";
import s from "./ShortBreakBtn.module.css";

function ShortBreakBtn() {
  function onPress() {}
  return (
    <div>
      <button className={s.btn} type="button" onClick={onPress}>
        Short Break
      </button>
    </div>
  );
}

export default ShortBreakBtn;
