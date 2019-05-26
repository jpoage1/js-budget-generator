import annualRevenue from './annualRevenue';
export default function annualWages(employees, employee, deals, averageDeal, helper) {
    console.log(helper(employee, annualRevenue(employees, employee, deals, averageDeal)))
    return helper(employee, annualRevenue(employees, employee, deals, averageDeal));
};