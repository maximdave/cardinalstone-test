import React from "react";
import "./TextField.css";

const TextField = ({
  label,
  onChange,
  value,
  placeholder,
  type,
  className,
  name,
  htmlFor,
  ...props
}) => (
  <div className={`${className} `}>
    <label htmlFor={htmlFor} className="label-class">
      {label}
    </label>
    <div>
      <input
        value={value}
        type={type}
        className="input-style mr-2"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  </div>
);

export default TextField;
