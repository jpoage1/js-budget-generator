export default function team(staff, team) {
    return Array.isArray(team)
        ? staff.filter( employee => team.indexOf(employee.team) !== -1 || team.indexOf(employee.id) !== -1 )
        : staff.filter( employee => employee.team == team || employee.id == team );
};