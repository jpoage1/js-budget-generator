import annualRevenue from './annualRevenue';
import workWeeks from './workWeeks';
export default function weeklyRevenue(employees, employee, deals, averageDeal) {
    return annualRevenue(employees, employee, deals, averageDeal) / workWeeks(employee);
};