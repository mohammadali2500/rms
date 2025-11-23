import React, { useState } from "react";
import { Treebeard } from "react-treebeard";

const data = {
  name: "Root",
  toggled: true,
  children: [
    {
      name: "Google",
      url: "https://www.google.com"
    },
    {
      name: "GitHub",
      url: "https://github.com"
    }
  ]
};

const customDecorators = {
  ...Treebeard.decorators,

  Header: ({ style, node }) => {
    const label = (
      <a
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={(e) => e.stopPropagation()} // Prevent toggling when clicking link
      >
        {node.name}
      </a>
    );

    return (
      <div style={style.base}>
        <div style={style.title}>
          {node.url ? label : node.name}
        </div>
      </div>
    );
  }
};

export default function SidebarTree() {
  const [treeData, setTreeData] = useState(data);
  const [cursor, setCursor] = useState(false);

  const onToggle = (node, toggled) => {
    if (cursor) cursor.active = false;
    node.active = true;
    if (node.children) node.toggled = toggled;

    setCursor(node);
    setTreeData(Object.assign({}, treeData));
  };

  return (
    <Treebeard
      data={treeData}
      onToggle={onToggle}
      decorators={customDecorators}
    />
  );
}