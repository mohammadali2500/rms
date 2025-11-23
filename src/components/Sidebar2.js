import React, { useState } from "react";
import { Treebeard } from "react-treebeard";

const data = {
  name: "Root",
  toggled: true,
  children: [
    { name: "Google", url: "https://www.google.com" },
    { name: "GitHub", url: "https://github.com" }
  ]
};

const customDecorators = {
  ...Treebeard.decorators,

  Header: ({ style, node }) => {
    const handleClick = (e) => {
      // Ctrl + Left-click → Open in new tab
      if (e.ctrlKey && node.url) {
        e.preventDefault();
        window.open(node.url, "_blank");
        return;
      }

      // Middle-click → Open in new tab
      if (e.button === 1 && node.url) {
        e.preventDefault();
        window.open(node.url, "_blank");
        return;
      }

      // Default behavior should toggle node → let Treebeard handle it
    };

    const handleMouseDown = (e) => {
      // Needed to detect middle-click before Treebeard processes it
      if (e.button === 1 && node.url) {
        e.preventDefault();
        window.open(node.url, "_blank");
      }
    };

    return (
      <div
        style={style.base}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
      >
        <div style={style.title}>
          {node.name}
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