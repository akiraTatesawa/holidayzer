import express from "express";

import { checkIfTodayIsHoliday } from "./services/checkIfTodayIsHoliday.js";
import { holidays } from "./services/holidays.js";

const app = express();

app.get("/holidays", (_req, res) => {
  res.send(holidays);
});

app.get("/is-today-holiday", (_req, res) => {
  console.log(checkIfTodayIsHoliday(holidays));
  res.send(checkIfTodayIsHoliday(holidays));
});

app.listen(3333, () => {
  console.log("Server is running!");
});
