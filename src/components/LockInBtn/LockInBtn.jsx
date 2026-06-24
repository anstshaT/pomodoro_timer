import React from "react";
import s from "./LockInBtn.module.css";

function LockInBtn() {
  function onPress() {}

  return (
    <button className={s.btn} type="button" onClick={onPress}>
      Lock In
    </button>
  );
}

export default LockInBtn;
