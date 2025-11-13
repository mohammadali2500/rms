import React, { useState } from "react";
import { Treebeard } from "react-treebeard";
import { useNavigate } from "react-router-dom";
import { RoutingConfiguration } from "../config/RoutingConfiguration";
import { useUser } from "../context/UserContext";
import { filterRoutesByRole } from "../utils/routeUtils";

const SidebarTree = () => {
  const navigate = useNavigate();
  const user = useUser();
  const [cursor, setCursor] = useState(null);
  const [data, setData] = useState(() =>
    filterRoutesByRole(RoutingConfiguration, user.roles)
  );

  const onToggle = (node, toggled) => {
    if (cursor) cursor.active = false;
    node.active = true;
    if (node.children) node.toggled = toggled;
    setCursor(node);
    setData([...data]);
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
      {data.map((tree, index) => (
        <Treebeard
          key={index}
          data={tree}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default SidebarTree;