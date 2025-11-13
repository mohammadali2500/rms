import React, { useState } from "react";
import { Treebeard } from "react-treebeard";
import { useNavigate } from "react-router-dom";
import { RoutingConfiguration } from "../config/RoutingConfiguration";
import { useUser } from "../context/UserContext";


const SidebarTree = () => {
  const navigate = useNavigate();
  const user = useUser();
  const [cursor, setCursor] = useState(null);

  // Recursive function to filter routes by role
  const filterByRole = (nodes) => {
    return nodes
      .map((node) => {
        if (node.children) {
          const filteredChildren = filterByRole(node.children);
          return filteredChildren.length > 0
            ? { ...node, children: filteredChildren }
            : null;
        } else if (!node.allowedRoles) {
          return node;
        } else if (
          node.allowedRoles.some((role) => user.roles.includes(role))
        ) {
          return node;
        }
        return null;
      })
      .filter(Boolean);
  };


  // Prepare initial tree data
  const initialTreeData = {
    name: "Menu",
    toggled: true,
    children: filterByRole(RoutingConfiguration),
  };

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
      <Treebeard
        data={treeData}
        onToggle={onToggle}
      />
    </div>
  );
};

export default SidebarTree;