import React from "react";

import "./Modal.css";

function Modal(props: any) {
  return (
    <div
      className="fixed top-0 left-0 h-full min-h-screen w-full bg-[rgba(0,0,0,0.46)] flex justify-center items-center z-20"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className="overflow-y-auto max-h-[95vh] bg-white  shadow-md"
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
