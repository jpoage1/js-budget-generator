import staffByRole from './staffByRole';
import employeeStat from './employeeStat';
export default function statsByRole(staff, role, productRate, devs = [], sdrs = []) {
    return staffByRole(staff, role).map( employee => {
        return employeeStat(employee, productRate, devs, sdrs)[employee.role]
     } );
};