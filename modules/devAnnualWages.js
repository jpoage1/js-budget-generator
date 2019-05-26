import devWeeklyWages from './devWeeklyWages';
import workWeeks from './workWeeks';
export default function devAnnualWages(employee) {
    return devWeeklyWages(employee)*workWeeks(employee);
};