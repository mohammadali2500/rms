// src/routes/RouteMap.js
import { RouteConfig } from "./RouteConfig";

export const RouteMap = RouteConfig.reduce((acc, r) => {
  acc[r.id] = r;
  return acc;
}, {});