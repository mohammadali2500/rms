import CurrencySetup from "../pages/CurrencySetup";
import HolidaySetup from "../pages/HolidaySetup";
import CurrencyReport from "../pages/CurrencyReport";
import HolidayReport from "../pages/HolidayReport";

export const RoutingConfiguration = [
  {
    name: "Configuration",
    children: [
      {
        name: "Static",
        children: [
          {
            name: "Currency Setup",
            path: "/",
            component: CurrencySetup,
            allowedRoles: ["analyst", "reader"],
            actionRoles: ["analyst"],
          },
          {
            name: "Holiday Setup",
            path: "/configuration/static/holiday-setup",
            component: HolidaySetup,
            allowedRoles: ["analyst", "reader"],
            actionRoles: ["analyst"],
          },
        ],
      },
      {
        name: "Report",
        children: [
          {
            name: "Currency Report",
            path: "/configuration/report/currency-report",
            component: CurrencyReport,
            allowedRoles: ["approver", "reader"],
            actionRoles: ["approver"],
          },
          {
            name: "Holiday Report",
            path: "/configuration/report/holiday-report",
            component: HolidayReport,
            allowedRoles: ["approver", "reader"],
            actionRoles: ["approver"],
          },
        ],
      },
    ],
  },
];