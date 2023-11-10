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
          


          <div className="custom-input-edit-footer flex items-center bg--600 justify-between ">
            <button type="submit" className="p-2">{buttonText || "Add"}</button>

            <X onClick={() => setIsCustomInput(false)} className=" cursor-pointer h-[35px] w-[35px] p-1 rounded-full hover:bg-gray-300" />
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
