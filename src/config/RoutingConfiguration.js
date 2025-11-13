import Currency from "../pages/Currency";
import Holiday from "../pages/Holiday";
import CurrencyReport from "../pages/CurrencyReport";
import HolidayReport from "../pages/HolidayReport";
import ProcessA from "../pages/ProcessA";
import ProcessB from "../pages/ProcessA";
import DailyReportA from "../pages/DailyReportA";
import DailyReportB from "../pages/DailyReportA";

export const RoutingConfiguration = [
  {
    name: "Configuration",
    children: [
      {
        name: "Static",
        children: [
          {
            name: "Currency",
            path: "/configuration/static/currency-setup",
            component: Currency,
            allowedRoles: ["analyst", "reader"],
            actionRoles: ["analyst"],
          },
          {
            name: "Holiday",
            path: "/configuration/static/holiday-setup",
            component: Holiday,
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
  {
    name: "Daily",
    children: [
      {
        name: "Process",
        children: [
          {
            name: "Process A",
            path: "/daily/process/a",
            component: ProcessA,
            allowedRoles: ["analyst", "reader"],
            actionRoles: ["analyst"],
          },
          {
            name: "Process B",
            path: "/daily/process/b",
            component: ProcessA,
            allowedRoles: ["analyst", "reader"],
            actionRoles: ["analyst"],
          },
        ],
      },
      {
        name: "Daily Report",
        children: [
          {
            name: "Daily Report A",
            path: "/daily/report/a",
            component: DailyReportA,
            allowedRoles: ["approver", "reader"],
            actionRoles: ["approver"],
          },
          {
            name: "Daily Report B",
            path: "/daily/report/b",
            component: DailyReportA,
            allowedRoles: ["approver", "reader"],
            actionRoles: ["approver"],
          },
        ],
      },
    ],
  },
];