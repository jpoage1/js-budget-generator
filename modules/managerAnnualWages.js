import managerWeeklyWages from './managerWeeklyWages';
import workWeeks from './workWeeks';
export default function managerAnnualWages(employee, devs, sdrs, productRate) {
    return managerWeeklyWages(devs, sdrs, productRate)*workWeeks(employee);
};