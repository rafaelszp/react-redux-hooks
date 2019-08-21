import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE, toggleSwitch } from "./UiReducer";

const Toggle = () => {
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const toggle = () => toggleSwitch()(dispatch);
  return (
    <div>
      <div>{JSON.stringify(ui)}</div>
      <p>Method 1</p>
      <input
        type="checkbox"
        checked={ui.toggle}
        onChange={() => dispatch({ type: TOGGLE })}
      />
      {" dispatch({ type: TOGGLE })"}

      <p>Method 2</p>
      <input type="checkbox" checked={ui.toggle} onChange={() => toggle()} />
      {" toggle()"}
    </div>
  );
};

export default Toggle;
