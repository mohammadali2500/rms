import React from "react";
import { useUser } from "../context/UserContext";

const Header = () => {
  const user = useUser();

  return (
    <header
      style={{
        background: "#1976d2",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>React Role-Based Dashboard</h3>
      <div>Welcome, {user?.name || "Guest"}</div>
    </header>
  );
};

export default Header;