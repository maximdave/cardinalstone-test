import React, { useState, useEffect } from "react";
import "./Button.css";

const Button = ({ text, type, style, className, onClick, ...props }) => {
  const [className1, setClassName] = useState("");
  useEffect(() => {
    switch (type) {
      case "primary":
        setClassName("primary");
        break;
      case "danger":
        setClassName("danger");
        break;
      case "secondary":
        setClassName("secondary");
        break;
      default:
        setClassName("primary");
    }
  }, [type]);
  return (
    <button
      type={type}
      className={`${className1} ${className}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
