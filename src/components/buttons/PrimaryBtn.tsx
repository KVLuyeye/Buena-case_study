import React from "react";
interface ButtonProps {
  value?: string;
  onClick: () => void;
}

export const PrimaryBtn: React.FC<ButtonProps> = ({ onClick, value }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white px-4 py-2 shadow-lg rounded-lg hover:opacity-75"
    >
      {value}
    </button>
  );
};
