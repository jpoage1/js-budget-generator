import weeklyWages from './weeklyWage';
export default function weeklyWages(employees, deals, averageDeal){
    return employees.map(employee => weeklyWage(employees, employee, deals, averageDeal)).reduce( (acc, num) => acc+num);
};