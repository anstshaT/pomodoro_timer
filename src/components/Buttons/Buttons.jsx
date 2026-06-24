import React from "react";
import LockInBtn from "../LockInBtn/LockInBtn";
import ShortBreakBtn from "../ShortBreakBtn/ShortBreakBtn";
import LongBreakBtn from "../LongBreakBtn/LongBreakBtn";
import s from "./Buttons.module.css";

function Buttons() {
  return (
    <div className={s.div}>
      <LockInBtn />
      <ShortBreakBtn />
      <LongBreakBtn />
    </div>
  );
}

export default Buttons;
