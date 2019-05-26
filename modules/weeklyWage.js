import weeklyRevenue from './weeklyRevenue';
export default function weeklyWage(employees, employee, deals, averageDeal, helper) {
    return helper(employee, weeklyRevenue(employees, employee, deals, averageDeal));
};