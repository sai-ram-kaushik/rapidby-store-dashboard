import React from "react";

const Button = ({ title, className, onClick, disabled }) => {
  return (
    <button
      className={`bg-secondary text-background rounded-lg py-[8px] px-[24px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
