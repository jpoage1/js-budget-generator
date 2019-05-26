import revenue from './revenue';
import totalHours from './totalHours';
export default function revHour(employees, deals, averageDeal) {
    return revenue(deals, averageDeal) / totalHours(employees);
};