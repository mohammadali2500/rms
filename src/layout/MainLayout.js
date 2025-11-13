import React from "react";
import SidebarTree from "../components/SidebarTree";
import Header from "../components/Header";


const MainLayout = ({ children }) => (
  <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    <Header />
    <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
      <SidebarTree />
      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  </div>
);

export default MainLayout;