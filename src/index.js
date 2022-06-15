import express from "express";
import cors from "cors";
import chalk from "chalk";

import { checkIfTodayIsHoliday } from "./services/checkIfTodayIsHoliday.js";
import { holidays } from "./holidays.js";
import { showMonthHolidays } from "./services/showMonthHolidays.js";

const app = express();

app.use(cors());

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
  console.log(chalk.black.bgGreen.bold("Server is running!"));
});
