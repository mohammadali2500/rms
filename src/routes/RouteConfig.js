// src/routes/RouteConfig.js
import CurrencySetup from "../screens/Currency";
import CurrencyNew from "../screens/CurrencyNew";
import HolidaySetup from "../screens/Holiday";
import CurrencyReport from "../screens/CurrencyReport";
import HolidayReport from "../screens/HolidayReport";
import ProcessA from "../screens/ProcessA";
import ProcessB from "../screens/ProcessB";
import DailyReportA from "../screens/DailyReportA";
import DailyReportB from "../screens/DailyReportB";

export const RouteConfig = [
  {
    id: "currencySetup",
    path: "/configuration/static/currency-setup",
    component: CurrencySetup,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "currencyNew",
    path: "/configuration/static/currency-setup/new",
    component: CurrencyNew,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "holidaySetup",
    path: "/configuration/static/holiday-setup",
    component: HolidaySetup,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "currencyReport",
    path: "/configuration/report/currency-report",
    component: CurrencyReport,
    allowedRoles: ["analyst", "approver", "reader"]
  },
  {
    id: "holidayReport",
    path: "/configuration/report/holiday-report",
    component: HolidayReport,
    allowedRoles: ["analyst", "approver", "reader"]
  },
  {
    id: "processA",
    path: "/daily/process/process-a",
    component: ProcessA,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "processB",
    path: "/daily/process/process-b",
    component: ProcessB,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "dailyReportA",
    path: "/daily/reports/report-a",
    component: DailyReportA,
    allowedRoles: ["analyst", "approver", "reader"]
  },
  {
    id: "dailyReportB",
    path: "/daily/reports/report-b",
    component: DailyReportB,
    allowedRoles: ["analyst", "approver", "reader"]
  }
];