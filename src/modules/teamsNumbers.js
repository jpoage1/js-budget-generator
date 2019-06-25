export default function teamsNumbers(staff) {
    return [...new Set(staff.map( employee => employee.team))];
};