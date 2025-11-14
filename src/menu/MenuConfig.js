// src/menu/MenuConfig.js

export const MenuConfig = [
  {
    name: "Configuration",
    children: [
      {
        name: "Static",
        children: [
          { name: "Currency Setup", routeId: "currencySetup" },
          { name: "Holiday Setup", routeId: "holidaySetup" }
        ]
      },
      {
        name: "Report",
        children: [
          { name: "Currency Report", routeId: "currencyReport" },
          { name: "Holiday Report", routeId: "holidayReport" }
        ]
      }
    ]
  },
  {
    name: "Daily",
    children: [
      {
        name: "Process",
        children: [
          { name: "Process A", routeId: "processA" },
          { name: "Process B", routeId: "processB" }
        ]
      },
      {
        name: "Reports",
        children: [
          { name: "Daily Report A", routeId: "dailyReportA" },
          { name: "Daily Report B", routeId: "dailyReportB" }
        ]
      }
    ]
  }
];