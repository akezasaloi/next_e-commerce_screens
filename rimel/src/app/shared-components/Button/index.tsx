import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children = "View All Products",
  onClick,
  className = "",
  type = "button",
}) => (
  <div className={`text-center mt-10 mb-12 ${className}`}>
    <button
      type={type}
      className="bg-[#DB4444] text-white rounded-md text-lg font-semibold px-12 py-3 hover:bg-red-700 transition"
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default Button;