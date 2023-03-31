import dayjs from "dayjs";

import type { IHolidays } from "@/store/ignore/list";

const weekends = [6, 0]; 

export function addBusinessDays(startDate:string|Date, daysToAdd:number, holidays:IHolidays[]) {
  let currentDate = dayjs(startDate);
  let daysAdded = 1;

  while (daysAdded < daysToAdd) {
    currentDate = currentDate.add(1, 'day');
    if (!holidays.find(holiday => dayjs(holiday.date).isSame(currentDate, 'day')) &&
        !weekends.includes(currentDate.day())) {
      daysAdded++;
    }
  }

  return currentDate;
}