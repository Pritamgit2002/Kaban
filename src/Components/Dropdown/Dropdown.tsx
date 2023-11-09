import React, { useEffect, useRef } from "react";

function Dropdown(props: any) {
  const dropdownRef: any = useRef();

  const handleClick = (event: any) => {
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(event.target) &&
      props.onClose
    )
      props.onClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className={`absolute right-0 top-full bg-white rounded-3 min-h-[40px] min-w-[80px] w-fit-content h-fit-content max-w-[250px] max-h-[390px] overflow-y-auto z-[5] custom-scroll ${props.class ? props.class : ""}`}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;
