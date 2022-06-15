import { holidays } from "../holidays.js";

export function checkIfTodayIsHoliday() {
  const todayDate = new Date();
  const todayString = todayDate.toLocaleDateString("en-US");

  if (holidays.some((holiday) => holiday.date === todayString)) {
    const holiday = holidays.find((el) => el.date === todayString);

    return `Sim, hoje é ${holiday.name}`;
  }
  return "Não, hoje não é feriado";
}
