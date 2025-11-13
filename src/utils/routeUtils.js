// src/utils/routeUtils.js
export const flattenRoutes = (nodes) => {
  return nodes.flatMap((node) =>
    node.children ? flattenRoutes(node.children) : node.path ? [node] : []
  );
};

// recursive role filtering
export const filterRoutesByRole = (nodes, roles) => {
  return nodes
    .map((node) => {
      if (node.children) {
        const filteredChildren = filterRoutesByRole(node.children, roles);
        return filteredChildren.length ? { ...node, children: filteredChildren } : null;
      } else if (!node.allowedRoles) {
        return node;
      } else if (node.allowedRoles.some((r) => roles.includes(r))) {
        return node;
      }
      return null;
    })
    .filter(Boolean);
};
