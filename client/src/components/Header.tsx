import React from "react";
const Header = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "0",
        left: "0",
        right: "0",
        height: "90px",
        backgroundColor: "#ebb002",
        color: "#f7f5ef",
      }}
    >
      <h1 style={{ position: "absolute", left: "20px", top: "20px" }}>
        Note App
      </h1>
    </div>
  );
};

export default Header;
