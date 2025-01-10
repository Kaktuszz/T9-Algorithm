import { Key } from "../Key/Key";
import "./Keyboard.css";

export const Keyboard = ({ setListener, listener }) => {
    const keyClickHandler = (value) => {
        if (value === "1") {
          setListener(listener.slice(0, -1));
        } else {
          setListener(listener + value);
        }
      };

  return (
    <div className="keyHolder">
      <Key value="1" onClick={keyClickHandler}>-</Key>
      <Key value="2" onClick={keyClickHandler}>abc</Key>
      <Key value="3" onClick={keyClickHandler}>def</Key>
      <Key value="4" onClick={keyClickHandler}>ghi</Key>
      <Key value="5" onClick={keyClickHandler}>jkl</Key>
      <Key value="6" onClick={keyClickHandler}>mno</Key>
      <Key value="7" onClick={keyClickHandler}>pqrs</Key>
      <Key value="8" onClick={keyClickHandler}>tuv</Key>
      <Key value="9" onClick={keyClickHandler}>wxyz</Key>
      <Key value="#" onClick={keyClickHandler}>shift</Key>
    </div>
  );
};
