import { addDays, previousMonday } from "date-fns";

interface GenerateDatesFromLastMondayProps {
  numOfDays: number;
}

const generateDatesFromLastMonday = ({
  numOfDays,
}: GenerateDatesFromLastMondayProps) => {
  const lastMonday = previousMonday(new Date());
  const calendarDays = [lastMonday];
  for (let i = 1; i < numOfDays; i++) {
    calendarDays.push(addDays(new Date(lastMonday), i));
  }

  return calendarDays;
};

export default generateDatesFromLastMonday;
