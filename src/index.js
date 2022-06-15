import express from "express";

import { checkIfTodayIsHoliday } from "./services/checkIfTodayIsHoliday.js";
import { holidays } from "./services/holidays.js";
import { showMonthHolidays } from "./services/showMonthHolidays.js";

const app = express();

app.get("/holidays", (_req, res) => {
  res.send(holidays);
});

app.get("/is-today-holiday", (_req, res) => {
  res.send(checkIfTodayIsHoliday());
});

app.get("/holidays/:idMonth", (req, res) => {
  res.send(showMonthHolidays(req.params.idMonth));
});

app.listen(3333, () => {
  console.log("Server is running!");
});
