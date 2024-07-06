import React from "react";
interface ButtonProps {
  value?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const PrimaryBtn: React.FC<ButtonProps> = ({
  onClick,
  value,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white px-4 py-2 shadow-lg rounded-lg hover:opacity-75"
      style={style}
    >
      {value}
    </button>
  );
};
