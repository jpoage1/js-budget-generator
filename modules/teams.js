import team from './team';
import teamsNumbers from './teamsNumbers';
export default function teams(staff) {
    return teamsNumbers(staff).map( teamNo => team(staff, teamNo) );
};