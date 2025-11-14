// src/menu/Sidebar.js
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { RouteMap } from "../routes/RouteMap";
import { MenuConfig } from "./MenuConfig";
import { filterMenuByRoles } from "./filterMenuByRoles";
import { Treebeard } from "react-treebeard";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const { roles } = useUser();

  const [treeData, setTreeData] = useState(() => filterMenuByRoles(MenuConfig, roles));

  useEffect(() => {
    setTreeData(filterMenuByRoles(MenuConfig, roles));
  }, [roles]);

  const onToggle = (node, toggled) => {
    // Recursively set toggled only for the clicked node
    const updateToggled = (n) => {
      if (n === node) {
        return { ...n, toggled };
      }
      if (n.children) {
        return { ...n, children: n.children.map(updateToggled) };
      }
      return n;
    };

    setTreeData(updateToggled(treeData));
    if (node.routeId) {
      const route = RouteMap[node.routeId];
      navigate(route.path);
    }
  };

  return <Treebeard data={treeData} onToggle={onToggle} />;
};

export default Sidebar;