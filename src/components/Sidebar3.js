import React, { useState, useRef, useEffect } from "react";
import { Treebeard } from "react-treebeard";

const initialData = {
  name: "Root",
  toggled: true,
  children: [
    { name: "Google", url: "https://www.google.com" },
    { name: "GitHub", url: "https://github.com" }
  ]
};

export default function SidebarTree() {
  const [data, setData] = useState(initialData);
  const [cursor, setCursor] = useState(null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    node: null
  });

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = () => {
      if (contextMenu.visible) {
        setContextMenu((m) => ({ ...m, visible: false }));
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [contextMenu.visible]);

  // Treebeard toggle logic
  const onToggle = (node, toggled) => {
    if (cursor) cursor.active = false;
    node.active = true;
    if (node.children) node.toggled = toggled;

    setCursor(node);
    setData({ ...data });
  };

  // Right-click handler
  const handleRightClick = (event, node) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      node: node
    });
  };

  // Custom Treebeard Header to attach right-click
  const decorators = {
    ...Treebeard.decorators,
    Header: ({ style, node }) => (
      <div
        style={style.base}
        onContextMenu={(e) => handleRightClick(e, node)}
      >
        <div style={style.title}>{node.name}</div>
      </div>
    )
  };

  // Menu actions
  const openInNewTab = () => {
    if (contextMenu.node?.url) {
      window.open(contextMenu.node.url, "_blank");
    }
  };

  const expandNode = () => {
    if (!contextMenu.node) return;
    contextMenu.node.toggled = true;
    setData({ ...data });
  };

  const collapseNode = () => {
    if (!contextMenu.node) return;
    contextMenu.node.toggled = false;
    setData({ ...data });
  };

  return (
    <div>
      <Treebeard data={data} onToggle={onToggle} decorators={decorators} />

      {/* Context Menu */}
      {contextMenu.visible && (
        <ul
          style={{
            position: "fixed",
            top: contextMenu.y,
            left: contextMenu.x,
            background: "#fff",
            padding: "5px 0",
            margin: 0,
            listStyle: "none",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            borderRadius: "4px",
            zIndex: 9999
          }}
        >
          {contextMenu.node?.url && (
            <li
              style={menuItemStyle}
              onClick={openInNewTab}
            >
              Open in new tab
            </li>
          )}

          <li style={menuItemStyle} onClick={expandNode}>Expand</li>
          <li style={menuItemStyle} onClick={collapseNode}>Collapse</li>
        </ul>
      )}
    </div>
  );
}

const menuItemStyle = {
  padding: "6px 15px",
  cursor: "pointer",
  whiteSpace: "nowrap"
};