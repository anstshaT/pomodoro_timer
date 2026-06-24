import React from "react";
import s from "./LongBreakBtn.module.css";

function LongBreakBtn() {
  function onPress() {}
  return (
    <div>
      <button className={s.btn} type="button" onClick={onPress}>
        Long Break
      </button>
    </div>
  );
}

export default LongBreakBtn;
