import React, { useState } from "react";

import { X } from "react-feather";

import "./CustomInput.css";
interface CustomInputProps {
  text: string;
  onSubmit: (value: string) => void;
  displayClass?: string;
  editClass?: string;
  placeholder?: string;
  defaultValue?: string|null;
  buttonText?: string;
  boardsLength?: Number;
}
function CustomInput(props: CustomInputProps) {
  const {
    text,
    onSubmit,
    displayClass,
    editClass,
    placeholder,
    defaultValue,
    buttonText,
    boardsLength,
  } = props;
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [inputText, setInputText] = useState(defaultValue || "");

  console.log("default ---->>>>"+defaultValue);
  console.log("input ->>>>>>"+inputText);

  const submission = (e: any) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      onSubmit(inputText);
       setInputText("");
    }
    setIsCustomInput(false);
  };

  return (
    <div className="custom-input">
      {isCustomInput ? (
        <form
          className={`custom-input-edit ${editClass ? editClass : ""}`}
          onSubmit={submission}
        >

            <input
              type="text"
              value={inputText}
              placeholder={placeholder || text}
              onChange={(event) => setInputText(event.target.value)}
              autoFocus
            />
          


          <div className="custom-input-edit-footer">
            <button type="submit" className="p-5">{buttonText || "Add"}</button>
            <X onClick={() => setIsCustomInput(false)} className="closeIcon" />
          </div>
        </form>
      ) : (
        <p
          className={`custom-input-display ${displayClass ? displayClass : ""}`}
          onClick={() => setIsCustomInput(true)}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default CustomInput;
