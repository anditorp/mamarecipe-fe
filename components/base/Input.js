import React from "react";

const Input = ({ label, placeholder, className, ...props }) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label || "Default Label"}</span>
      </div>
      <input
        type="text"
        placeholder={placeholder || "Type here"}
        className={`input input-bordered w-full max-w-full focus:border-primary focus:outline-none focus:shadow-lg ${className}`}
        {...props}
      />
    </label>
  );
};

export default Input;
