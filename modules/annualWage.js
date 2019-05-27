import annualRevenue from './annualRevenue';
export default function annualWages(employees, employee, deals, averageDeal, helper) {
    return helper(employee, annualRevenue(employees, employee, deals, averageDeal));
};