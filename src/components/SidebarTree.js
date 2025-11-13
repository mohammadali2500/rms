import React, { useState } from "react";
import { Treebeard } from "react-treebeard";
import { useNavigate } from "react-router-dom";
import { RoutingConfiguration } from "../config/RoutingConfiguration";
import { useUser } from "../context/UserContext";
import { filterRoutesByRole, buildTreeData } from "../utils/routeUtils";

const SidebarTree = () => {
  const navigate = useNavigate();
  const user = useUser();
  const [cursor, setCursor] = useState(null);


  const filteredRoutes = filterRoutesByRole(RoutingConfiguration, user.roles);
  const initialTreeData = buildTreeData(filteredRoutes);
  const [treeData, setTreeData] = useState(initialTreeData);

  // Helper to update toggled/active state immutably
  const updateTree = (node, toggledNode) => {
    if (node === toggledNode) {
      return {
        ...node,
        active: true,
        toggled: node.children ? !node.toggled : node.toggled,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: node.children.map((child) => updateTree(child, toggledNode)),
        active: node === toggledNode,
      };
    }
    return { ...node, active: node === toggledNode };
  };

  const onToggle = (node, toggled) => {
    setTreeData((prevData) => updateTree(prevData, node));
    setCursor(node);
    if (node.path) navigate(node.path);
  };

  return (
    <div
      style={{
        width: 250,
        height: "100vh",
        overflowY: "auto",
        borderRight: "1px solid #ccc",
        background: "#fafafa",
      }}
    >
      <Treebeard data={treeData} onToggle={onToggle} />
    </div>
  );
};

export default SidebarTree;