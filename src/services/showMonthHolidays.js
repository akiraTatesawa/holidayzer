import { holidays } from "../holidays.js";

export function showMonthHolidays(idMonth) {
  const monthCode = `${idMonth}/`;
  const monthHolidays = holidays.filter((holiday) =>
    holiday.date.startsWith(monthCode)
  );

  return monthHolidays.length === 0
    ? "Nada para ver por aqui..."
    : monthHolidays;
}
