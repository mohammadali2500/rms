// src/menu/Sidebar.js

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { RouteMap } from "../config/RouteMap";
import { MenuConfig } from "./MenuConfig";
import { filterMenuByRoles } from "./filterMenuByRoles";
import { Treebeard } from "react-treebeard";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const { roles } = useUser();

  const filteredMenu = filterMenuByRoles(MenuConfig, roles);

  const [data, setData] = useState(filteredMenu);
  const [cursor, setCursor] = useState(null);

  // Refresh tree if roles change
  useEffect(() => {
    setData(filteredMenu);
  }, [roles]);

  const onToggle = (node, toggled) => {
    // Deep clone and update toggled state immutably for arrays or objects
    const updateToggled = (n) => {
      if (n === node) {
        return { ...n, toggled, active: true };
      }
      if (n.children) {
        return { ...n, children: n.children.map(updateToggled), active: false };
      }
      return { ...n, active: false };
    };

    let newData;
    if (Array.isArray(data)) {
      newData = data.map(updateToggled);
    } else {
      newData = updateToggled(data);
    }

    setCursor(node);
    setData(newData);
    if (node.routeId) {
      const route = RouteMap[node.routeId];
      navigate(route.path);
    }
  };

  return (
    <div style={{ width: 280, background: "#f4f4f4" }}>
      <Treebeard data={data} onToggle={onToggle} />
    </div>
  );
};

export default Sidebar;