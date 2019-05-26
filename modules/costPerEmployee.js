import staffByRole from './staffByRole';
import totalCost from './totalCost';
export default function costPerEmployee(staff, role) {
    const employees = staffByRole(staff,role);
    return totalCost(employees, role) / employees.length;
}