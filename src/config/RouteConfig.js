import Currency from "../pages/Currency";
import Holiday from "../pages/Holiday";
import CurrencyReport from "../pages/CurrencyReport";
import HolidayReport from "../pages/HolidayReport";
import ProcessA from "../pages/ProcessA";
import ProcessB from "../pages/ProcessA";
import DailyReportA from "../pages/DailyReportA";
import DailyReportB from "../pages/DailyReportA";
import CurrencyNew from "../pages/CurrencyNew";

export const RouteConfig = [
  {
    id: "currency",
    path: "/",
    component: Currency,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "currencyNew",
    path: "/newcurrency",
    component: CurrencyNew,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "holiday",
    path: "/holiday",
    component: Holiday,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "currencyReport",
    path: "/currency-report",
    component: CurrencyReport,
    allowedRoles: ["analyst", "approver", "reader"]
  },
  {
    id: "holidayReport",
    path: "/holiday-report",
    component: HolidayReport,
    allowedRoles: ["analyst", "approver", "reader"]
  },
  {
    id: "processA",
    path: "/processa",
    component: ProcessA,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "processB",
    path: "/processb",
    component: ProcessB,
    allowedRoles: ["analyst", "reader"],
    actionRoles: ["analyst"]
  },
  {
    id: "dailyReportA",
    path: "/report-a",
    component: DailyReportA,
    allowedRoles: ["analyst", "approver", "reader"]
  },
  {
    id: "dailyReportB",
    path: "/report-b",
    component: DailyReportB,
    allowedRoles: ["analyst", "approver", "reader"]
  }
];