import { developer }  from '../data/labels';
import staffByRole from './staffByRole'
import totalCost from './totalCost'
import totalHours from './totalHours'
import conversionsToDeal from './conversionsToDeal';
export default function averageWage(staff, role) {
    const employees = staffByRole(staff, role);
    return totalCost(employees) / totalHours(employees);
};