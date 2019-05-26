import revHour from './revHour';
export default function annualRevenue(employees, employee, deals, averageDeal) {
    return revHour(employees, deals, averageDeal) * employee.hours;
};