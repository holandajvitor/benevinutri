import React from "react";
import "./MenuButton.css";

function MenuButton({ label, onClick, mobile }) {
  return (
    <button
      className={`menu-button ${mobile ? "mobile" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default MenuButton;
