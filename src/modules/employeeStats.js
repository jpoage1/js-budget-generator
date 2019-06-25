import { developer, sdr, manager }  from '../data/labels';
import employeeStat from './employeeStat';
import staffByRole from './staffByRole';
import deals from './deals';
import wageHelper from './wageHelper';
export default function employeeStats(config, staff) {
    const { annualRevenue, averageDeal } = config;
    const d = deals(annualRevenue, averageDeal);
    const employees = {
        [manager]: staffByRole(staff, manager),
        [developer]: staffByRole(staff, developer),
        [sdr]: staffByRole(staff, sdr),
    };
    return staff.map( employee => employeeStat(config, employees[employee.role], employee, d, wageHelper(config, employee.role)) );
};




// helper = config => (e, r) => 
