import math from 'mathjs';
import weeklyWage from './weeklyWage';
import annualRevenue from './annualRevenue';
import annualWage from './annualWage';
import weeklyRevenue from './weeklyRevenue';
export default function employeeStat(config, employees, employee, deals, helper) {
    const { averageDeal } = config;
    return {
        ...employee,
        rate: math.eval(employee.rate),
        weeklyRevenue: weeklyRevenue(employees, employee, deals, averageDeal),
        weeklyWages: weeklyWage(employees, employee, deals, averageDeal, helper),
        annualRevenue: annualRevenue(employees, employee, deals, averageDeal),
        annualWages: annualWage(employees, employee, deals, averageDeal, helper),
    }
};