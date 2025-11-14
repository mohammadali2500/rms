// src/menu/filterMenuByRoles.js

import { RouteMap } from "../routes/RouteMap";

export const filterMenuByRoles = (menu, roles) => {
  return menu
    .map(item => {
      if (item.routeId) {
        const route = RouteMap[item.routeId];
        const allowed = route.allowedRoles.some(r => roles.includes(r));
        return allowed ? item : null;
      }

      if (item.children) {
        const filteredChildren = filterMenuByRoles(item.children, roles);
        return filteredChildren.length > 0
          ? { ...item, children: filteredChildren }
          : null;
      }

      return item;
    })
    .filter(Boolean);
};